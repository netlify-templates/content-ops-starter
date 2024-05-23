import { marked } from 'marked';
import PlainTextRenderer from './markdown-plaintext';
import algoliasearch from 'algoliasearch';
import { ALGOLIA_APP_ID, ALGOLIA_INDEX_NAME_SUFFIX, ALGOLIA_ADMIN_API_KEY, buildIndexName } from './consts';
import { allContent } from '../local-content';

export async function index() {
    if (!ALGOLIA_APP_ID || !ALGOLIA_INDEX_NAME_SUFFIX || !ALGOLIA_ADMIN_API_KEY) {
        throw new Error('Missing required configuration for indexing');
    }

    console.time('Indexing duration');
    const data = allContent();
    const posts = data.pages.filter((p) => p.__metadata.modelName == 'PostLayout');

    const objectsToIndex = buildObjectsToIndex(posts);
    await indexObjects(objectsToIndex);
    console.timeEnd('Indexing duration');

    return objectsToIndex.map((o) => o.url);
}

function buildObjectsToIndex(posts) {
    marked.use({ gfm: true });
    const mdLexer = new marked.Lexer();
    const mdPlainTextRenderer = new PlainTextRenderer({ spaces: true });

    console.log('Preparing data for indexing...');
    const objectsToIndex = posts.map((post) => {
        let o = {
            objectID: post.__metadata.id,
            url: post.__metadata.urlPath,
            slug: post.slug,
            title: post.title,
            date: post.date,
            authorName: post.author?.name,
            authorImage: post.author?.image?.url,
            excerpt: post.excerpt,
            featuredImage: post.featuredImage?.url
        };

        if (post.content) {
            const { heading, body } = parseMarkdown(post.content, mdLexer, mdPlainTextRenderer);
            o.contentHeading = heading;
            o.contentBody = body;
        }
        return o;
    });
    return objectsToIndex;
}

function parseMarkdown(markdown, lexer, renderer) {
    const body = marked(markdown, { renderer });
    let heading = null;
    const tokens = lexer.lex(markdown);
    for (let token of tokens) {
        if (token.type === 'heading' && token.depth === 1) {
            heading = token.text;
            break;
        }
    }
    return { heading, body };
}

async function indexObjects(objectsToIndex) {
    const indexName = buildIndexName();
    console.log('Indexing to', indexName);
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY);
    const index = client.initIndex(indexName);
    const response = await index.saveObjects(objectsToIndex);
    await index.setSettings({
        searchableAttributes: [
            'title',
            'contentHeading',
            'authorName',
            'excerpt',
            'slug',
            'contentBody',
            'date'
        ],
        customRanking: ['desc(date)']
    });
    await client.destroy();
    console.log(`Indexed ${response.objectIDs.length} objects`);
}

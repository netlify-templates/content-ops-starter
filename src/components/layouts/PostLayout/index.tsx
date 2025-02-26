import * as React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

import { getBaseLayoutComponent } from '../../../utils/base-layout';
import { getComponent } from '../../components-registry';
import Link from '../../atoms/Link';

export default function PostLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const { enableAnnotations = true } = site;
    const { title, date, author, markdown_content, bottomSections = [] } = page;
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('YYYY-MM-DD');

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-post-layout">
                <article className="px-4 py-16 sm:py-28">
                    <div className="mx-auto max-w-screen-2xl">
                        <header className="max-w-4xl mx-auto mb-12 text-center">
                            <h1 {...(enableAnnotations && { 'data-sb-field-path': 'title' })}>{title}</h1>
                            <div className="mt-4 text-sm uppercase">
                                <time dateTime={dateTimeAttr} {...(enableAnnotations && { 'data-sb-field-path': 'date' })}>
                                    {formattedDate}
                                </time>
                                {author && (
                                    <>
                                        <span className="mx-2">|</span>
                                        <PostAuthor author={author} enableAnnotations={enableAnnotations} />
                                    </>
                                )}
                            </div>
                        </header>
                        {markdown_content && (
                            <Markdown
                                options={{ forceBlock: true }}
                                className="max-w-3xl mx-auto sb-markdown"
                                {...(enableAnnotations && { 'data-sb-field-path': 'markdown_content' })}
                            >
                                {markdown_content}
                            </Markdown>
                        )}
                    </div>
                </article>
                {bottomSections.length > 0 && (
                    <div {...(enableAnnotations && { 'data-sb-field-path': 'bottomSections' })}>
                        {bottomSections.map((section, index) => {
                            const Component = getComponent(section.__metadata.modelName);
                            if (!Component) {
                                throw new Error(`no component matching the page section's model name: ${section.__metadata.modelName}`);
                            }
                            return (
                                <Component
                                    key={index}
                                    {...section}
                                    enableAnnotations={enableAnnotations}
                                    {...(enableAnnotations && { 'data-sb-field-path': `bottomSections.${index}` })}
                                />
                            );
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}

function PostAuthor({ author, enableAnnotations }) {
    const authorName = author.name && <span {...(enableAnnotations && { 'data-sb-field-path': '.name' })}>{author.name}</span>;
    return author.slug ? (
        <Link {...(enableAnnotations && { 'data-sb-field-path': 'author' })} href={`/blog/author/${author.slug}`}>
            {authorName}
        </Link>
    ) : (
        <span {...(enableAnnotations && { 'data-sb-field-path': 'author' })}>{authorName}</span>
    );
}

/*
function PostCategory({ category, enableAnnotations }) {
    if (!category) {
        return null;
    }
    return (
        <div className="mb-4">
            <Link {...(enableAnnotations && { 'data-sb-field-path': 'category' })} href={category.__metadata?.urlPath}>
                {category.title}
            </Link>
        </div>
    );
}
*/

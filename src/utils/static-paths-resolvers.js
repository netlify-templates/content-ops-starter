import { getAllNonFeaturedPostsSorted, getAllCategoryPostsSorted, generatePagedPathsForPage, isPublished } from './data-utils';

export function resolveStaticPaths({ pages, objects }) {
    return pages.reduce((paths, page) => {
        if (!process.env.stackbitPreview && page.isDraft) {
            return paths;
        }
        const objectType = page.__metadata?.modelName;
        const pageUrlPath = page.__metadata?.urlPath;
        if (objectType && StaticPathsResolvers[objectType]) {
            const resolver = StaticPathsResolvers[objectType];
            return paths.concat(resolver(page, objects));
        }
        return paths.concat(pageUrlPath);
    }, []);
}

const StaticPathsResolvers = {
    PostFeedLayout: (page, objects) => {
        let posts = getAllNonFeaturedPostsSorted(objects);
        if (!process.env.stackbitPreview) {
            posts = posts.filter(isPublished);
        }
        const numOfPostsPerPage = page.numOfPostsPerPage ?? 10;
        return generatePagedPathsForPage(page, posts, numOfPostsPerPage);
    },
    PostFeedCategoryLayout: (page, objects) => {
        const categoryId = page.__metadata?.id;
        const numOfPostsPerPage = page.numOfPostsPerPage ?? 10;
        let categoryPosts = getAllCategoryPostsSorted(objects, categoryId);
        if (!process.env.stackbitPreview) {
            categoryPosts = categoryPosts.filter(isPublished);
        }
        return generatePagedPathsForPage(page, categoryPosts, numOfPostsPerPage);
    }
};

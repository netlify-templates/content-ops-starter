import { Model } from '@stackbit/types';

export const PostFeedLayout: Model = {
    type: 'page',
    name: 'PostFeedLayout',
    label: 'Blog',
    labelField: 'title',
    singleInstance: true,
    canDelete: false,
    filePath: 'content/pages/blog/index.md',
    fieldGroups: [
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
        },
        {
            name: 'seo',
            label: 'SEO',
            icon: 'page'
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: false,
            default: 'This is a page title',
            hidden: false,
            localized: false
        },
        {
            type: 'model',
            name: 'postFeed',
            label: 'Post feed',
            required: false,
            hidden: false,
            localized: false,
            models: ['PagedPostsSection'],
            readOnly: true
        },
        {
            type: 'number',
            name: 'numOfPostsPerPage',
            label: 'Number of posts per page',
            description: 'set to 0 to show all posts on a single page',
            required: false,
            default: 10,
            hidden: false,
            localized: false,
            subtype: 'int'
        },
        {
            type: 'boolean',
            name: 'enableSearch',
            label: 'Enable search',
            description: 'The built-in search works with a third party service. Learn how to configure it.',
            required: false,
            default: true,
            hidden: false,
            localized: false
        },
        {
            type: 'list',
            name: 'topSections',
            label: 'Top sections',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: [
                    'CarouselSection',
                    'DividerSection',
                    'FeaturedItemsSection',
                    'FeaturedPeopleSection',
                    'FeaturedPostsSection',
                    'GenericSection',
                    'ImageGallerySection',
                    'PricingSection',
                    'RecentPostsSection'
                ]
            }
        },
        {
            type: 'list',
            name: 'bottomSections',
            label: 'Bottom sections',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: [
                    'CarouselSection',
                    'DividerSection',
                    'FeaturedItemsSection',
                    'FeaturedPeopleSection',
                    'FeaturedPostsSection',
                    'GenericSection',
                    'ImageGallerySection',
                    'PricingSection',
                    'RecentPostsSection'
                ]
            }
        },
        {
            type: 'slug',
            name: 'slug',
            label: 'Slug',
            description:
                'The URL path of this page relative to site root. For example, the site root page would be "/", and post page would be "posts/new-post/"',
            required: true,
            hidden: false,
            localized: false,
            group: 'settings'
        },
        {
            type: 'boolean',
            name: 'isDraft',
            label: 'Draft',
            required: false,
            default: false,
            hidden: false,
            localized: false,
            group: 'settings'
        },
        {
            type: 'style',
            name: 'styles',
            label: 'Styles',
            description: 'The styles field is controlled by Netlify Create editor',
            required: false,
            hidden: false,
            localized: false,
            styles: {
                title: {
                    textAlign: '*'
                }
            }
        },
        {
            type: 'model',
            name: 'seo',
            label: 'SEO',
            required: false,
            hidden: false,
            localized: false,
            models: ['Seo'],
            group: 'seo'
        }
    ]
};

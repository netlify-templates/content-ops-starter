import { Model } from '@stackbit/types';

export const PostLayout: Model = {
    type: 'page',
    name: 'PostLayout',
    label: 'Post',
    labelField: 'title',
    filePath: 'content/pages/blog/{slug}.md',
    fieldGroups: [
        {
            name: 'thumbnail',
            label: 'Thumbnail',
            icon: 'image'
        },
        {
            name: 'cardStyles',
            label: 'Card styles',
            icon: 'palette'
        },
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
            required: true,
            default: 'This is a blog post title',
            hidden: false,
            localized: false
        },

        {
            type: 'date',
            name: 'date',
            label: 'Date',
            required: true,
            hidden: false,
            localized: false
        },
        {
            type: 'reference',
            name: 'author',
            label: 'Author',
            required: false,
            hidden: false,
            localized: false,
            models: ['Person']
        },
        {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
            required: false,
            default:
                'Nunc rutrum felis dui, ut consequat sapien scelerisque vel. Integer condimentum dignissim justo vel faucibus.',
            hidden: false,
            localized: false,
            group: 'thumbnail'
        },
        {
            type: 'model',
            name: 'featuredImage',
            label: 'Featured image',
            required: false,
            hidden: false,
            localized: false,
            models: ['ImageBlock'],
            group: 'thumbnail'
        },
        {
            type: 'list',
            name: 'bottomSections',
            label: 'Sections',
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
            name: 'isFeatured',
            label: 'Exclude from blog feed',
            description:
                "Enable this option to avoid a featured post (in a 'Featured posts' section) to appear duplicated in the blog page.",
            required: false,
            default: false,
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
            type: 'model',
            name: 'seo',
            label: 'SEO',
            required: false,
            hidden: false,
            localized: false,
            models: ['Seo'],
            group: 'seo'
        },
        {
            type: 'enum',
            name: 'colors',
            label: 'Colors',
            required: false,
            default: 'bg-light-fg-dark',
            hidden: false,
            localized: false,
            options: [
                {
                    label: 'Light background, dark foreground',
                    value: 'bg-light-fg-dark',
                    textColor: '$dark',
                    backgroundColor: '$light',
                    borderColor: '#ececec'
                },
                {
                    label: 'Neutral background, dark foreground',
                    value: 'bg-neutral-fg-dark',
                    textColor: '$dark',
                    backgroundColor: '$neutral',
                    borderColor: '#ececec'
                },
                {
                    label: 'Neutral alt background, dark foreground',
                    value: 'bg-neutralAlt-fg-dark',
                    textColor: '$dark',
                    backgroundColor: '$neutralAlt',
                    borderColor: '#ececec'
                },
                {
                    label: 'Dark background, light foreground',
                    value: 'bg-dark-fg-light',
                    textColor: '$light',
                    backgroundColor: '$dark',
                    borderColor: '#ececec'
                }
            ],
            group: 'cardStyles',
            controlType: 'palette'
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
                self: {
                    margin: ['tw0:96'],
                    padding: ['tw0:96'],
                    flexDirection: '*',
                    borderWidth: ['0:2', '4:8:4'],
                    borderStyle: '*',
                    borderColor: [
                        {
                            value: 'border-dark',
                            label: 'Dark',
                            color: '$dark'
                        },
                        {
                            value: 'border-light',
                            label: 'Light',
                            color: '$light'
                        },
                        {
                            value: 'border-neutral',
                            label: 'Neutral',
                            color: '$neutral'
                        },
                        {
                            value: 'border-neutralAlt',
                            label: 'Neutral alt',
                            color: '$neutralAlt'
                        },
                        {
                            value: 'border-primary',
                            label: 'Primary',
                            color: '$primary'
                        }
                    ],
                    borderRadius: '*',
                    textAlign: '*'
                }
            }
        }
    ]
};

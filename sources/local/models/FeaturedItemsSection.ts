import { Model } from '@stackbit/types';

export const FeaturedItemsSection: Model = {
    type: 'object',
    name: 'FeaturedItemsSection',
    label: 'Featured Items',
    labelField: 'title.text',
    fields: [
        {
            type: 'model',
            name: 'title',
            label: 'Title',
            required: false,
            hidden: false,
            localized: false,
            models: ['TitleBlock']
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            required: false,
            default: 'This is a subtitle',
            hidden: false,
            localized: false
        },
        {
            type: 'list',
            name: 'items',
            label: 'Items',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: ['FeaturedItem']
            }
        },
        {
            type: 'list',
            name: 'actions',
            label: 'Actions',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: ['Button', 'Link']
            }
        },
        {
            type: 'model',
            name: 'badge',
            label: 'Badge',
            required: false,
            hidden: false,
            localized: false,
            models: ['Badge']
        },
        {
            type: 'string',
            name: 'elementId',
            label: 'Element ID',
            description: 'The unique ID for an HTML element, must not contain whitespace',
            required: false,
            default: '',
            hidden: false,
            localized: false,
            group: 'settings'
        },
        {
            type: 'enum',
            name: 'variant',
            label: 'Arrangement',
            required: false,
            default: 'two-col-grid',
            hidden: false,
            localized: false,
            options: [
                {
                    label: 'Two column grid',
                    value: 'two-col-grid',
                    thumbnail: 'https://assets.stackbit.com/components/images/default/two-col-grid.png'
                },
                {
                    label: 'Three column grid',
                    value: 'three-col-grid',
                    thumbnail: 'https://assets.stackbit.com/components/images/default/three-col-grid.png'
                },
                {
                    label: 'Small list',
                    value: 'small-list',
                    thumbnail: 'https://assets.stackbit.com/components/images/default/small-list.png'
                },
                {
                    label: 'Big list',
                    value: 'big-list',
                    thumbnail: 'https://assets.stackbit.com/components/images/default/big-list.png'
                },
                {
                    label: 'Toggle list',
                    value: 'toggle-list',
                    thumbnail: 'https://assets.stackbit.com/components/images/default/toggle-list.png'
                }
            ],
            group: 'styles',
            controlType: 'thumbnails'
        },
        {
            type: 'enum',
            name: 'colors',
            label: 'Colors',
            description: 'The color theme of the section',
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
                    label: 'Dark background, light foreground',
                    value: 'bg-dark-fg-light',
                    textColor: '$light',
                    backgroundColor: '$dark',
                    borderColor: '#ececec'
                }
            ],
            group: 'styles',
            controlType: 'palette'
        },
        {
            type: 'model',
            name: 'backgroundImage',
            label: 'Background image',
            required: false,
            hidden: false,
            localized: false,
            models: ['BackgroundImage'],
            group: 'styles'
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
                    justifyContent: ['flex-start', 'flex-end', 'center']
                },
                subtitle: {
                    fontStyle: '*',
                    fontWeight: ['400', '500', '700'],
                    textDecoration: '*',
                    textAlign: '*'
                }
            }
        }
    ],
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        },
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
        }
    ]
};

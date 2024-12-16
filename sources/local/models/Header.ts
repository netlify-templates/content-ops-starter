import { Model } from '@stackbit/types';

export const Header: Model = {
    type: 'data',
    name: 'Header',
    label: 'Header',
    labelField: 'title',
    canDelete: false,
    filePath: 'content/data/{slug}.json',
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
    ],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: false,
            default: 'Your Brand',
            hidden: false,
            localized: false
        },
        {
            type: 'model',
            name: 'logo',
            label: 'Logo',
            required: false,
            hidden: false,
            localized: false,
            models: ['ImageBlock']
        },
        {
            type: 'list',
            name: 'primaryLinks',
            label: 'Primary links',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: ['Button', 'Link', 'SubNav']
            }
        },
        {
            type: 'list',
            name: 'secondaryLinks',
            label: 'Secondary links',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: ['Button', 'Link']
            }
        },
        {
            type: 'enum',
            name: 'variant',
            label: 'Arrangement',
            required: false,
            default: 'logo-left-primary-nav-left',
            hidden: false,
            localized: false,
            options: [
                {
                    label: 'Logo and primary links on the left',
                    value: 'logo-left-primary-nav-left',
                    thumbnail:
                        'https://assets.stackbit.com/components/images/default/logo-left-primary-nav-left.png'
                },
                {
                    label: 'Logo on the left, primary links centered',
                    value: 'logo-left-primary-nav-centered',
                    thumbnail:
                        'https://assets.stackbit.com/components/images/default/logo-left-primary-nav-centered.png'
                },
                {
                    label: 'Logo on the left, primary links on the right',
                    value: 'logo-left-primary-nav-right',
                    thumbnail:
                        'https://assets.stackbit.com/components/images/default/logo-left-primary-nav-right.png'
                },
                {
                    label: 'Logo centered, primary links on the left',
                    value: 'logo-centered-primary-nav-left',
                    thumbnail:
                        'https://assets.stackbit.com/components/images/default/logo-centered-primary-nav-left.png'
                },
                {
                    label: 'Logo and primary links centered',
                    value: 'logo-centered-primary-nav-centered',
                    thumbnail:
                        'https://assets.stackbit.com/components/images/default/logo-centered-primary-nav-centered.png'
                }
            ],
            group: 'styles',
            controlType: 'thumbnails'
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
            type: 'style',
            name: 'styles',
            label: 'Styles',
            description: 'The styles field is controlled by Netlify Create editor',
            required: false,
            hidden: false,
            localized: false,
            styles: {
                self: {
                    margin: ['tw0:36'],
                    padding: ['tw0:36']
                }
            }
        }
    ]
};

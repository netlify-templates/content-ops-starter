import { Model } from '@stackbit/types';

export const Footer: Model = {
    type: 'data',
    name: 'Footer',
    label: 'Footer',
    labelField: 'title',
    readOnly: true,
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
            type: 'model',
            name: 'logo',
            label: 'Logo',
            required: false,
            hidden: false,
            localized: false,
            models: ['ImageBlock']
        },
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
            type: 'markdown',
            name: 'text',
            label: 'Text',
            required: false,
            default: 'A description of your brand',
            hidden: false,
            localized: false
        },
        {
            type: 'model',
            name: 'primaryLinks',
            label: 'Primary Links',
            required: false,
            hidden: false,
            localized: false,
            models: ['FooterLinksGroup']
        },
        {
            type: 'model',
            name: 'secondaryLinks',
            label: 'Secondary Links',
            required: false,
            hidden: false,
            localized: false,
            models: ['FooterLinksGroup']
        },
        {
            type: 'list',
            name: 'socialLinks',
            label: 'Social links',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: ['Social']
            }
        },
        {
            type: 'list',
            name: 'legalLinks',
            label: 'Legal links',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: ['Link']
            }
        },
        {
            type: 'markdown',
            name: 'copyrightText',
            label: 'Copyright text',
            required: false,
            default: 'Copyright text',
            hidden: false,
            localized: false
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

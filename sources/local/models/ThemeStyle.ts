import { Model } from '@stackbit/types';

export const ThemeStyle: Model = {
    type: 'data',
    name: 'ThemeStyle',
    label: 'Theme Style',
    labelField: 'fontHeadlines',
    singleInstance: true,
    canDelete: false,
    filePath: 'content/data/style.json',
    fieldGroups: [
        {
            name: 'color-palettes',
            label: 'Colors',
            icon: 'fill-drip'
        },
        {
            name: 'text-styles',
            label: 'Text',
            icon: 'text'
        },
        {
            name: 'button-styles',
            label: 'Buttons',
            icon: 'palette'
        }
    ],
    fields: [
        {
            type: 'color',
            name: 'light',
            label: 'Light',
            required: false,
            hidden: false,
            localized: false,
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'dark',
            label: 'Dark',
            required: false,
            hidden: false,
            localized: false,
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'neutral',
            label: 'Neutral',
            required: false,
            hidden: false,
            localized: false,
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'neutralAlt',
            label: 'Neutral alt',
            required: false,
            hidden: false,
            localized: false,
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'primary',
            label: 'Primary',
            required: false,
            hidden: false,
            localized: false,
            group: 'color-palettes'
        },
        {
            type: 'enum',
            name: 'fontBody',
            label: 'Font - body & captions',
            required: false,
            default: 'sans',
            hidden: false,
            localized: false,
            options: [
                {
                    label: 'Sans',
                    value: 'sans'
                },
                {
                    label: 'Serif',
                    value: 'serif'
                }
            ],
            group: 'text-styles'
        },
        {
            type: 'enum',
            name: 'fontHeadlines',
            label: 'Font - headlines & subtitles',
            required: false,
            default: 'sans',
            hidden: false,
            localized: false,
            options: [
                {
                    label: 'Sans',
                    value: 'sans'
                },
                {
                    label: 'Serif',
                    value: 'serif'
                }
            ],
            group: 'text-styles'
        },
        {
            type: 'model',
            name: 'h1',
            label: 'H1',
            required: false,
            hidden: false,
            localized: false,
            models: ['ThemeStyleHeading'],
            group: 'text-styles',
            readOnly: true
        },
        {
            type: 'model',
            name: 'h2',
            label: 'H2',
            required: false,
            hidden: false,
            localized: false,
            models: ['ThemeStyleHeading'],
            group: 'text-styles',
            readOnly: true
        },
        {
            type: 'model',
            name: 'h3',
            label: 'H3',
            required: false,
            hidden: false,
            localized: false,
            models: ['ThemeStyleHeading'],
            group: 'text-styles',
            readOnly: true
        },
        {
            type: 'model',
            name: 'h4',
            label: 'H4',
            required: false,
            hidden: false,
            localized: false,
            models: ['ThemeStyleHeading'],
            group: 'text-styles',
            readOnly: true
        },
        {
            type: 'model',
            name: 'h5',
            label: 'H5',
            required: false,
            hidden: false,
            localized: false,
            models: ['ThemeStyleHeading'],
            group: 'text-styles',
            readOnly: true
        },
        {
            type: 'model',
            name: 'h6',
            label: 'H6',
            required: false,
            hidden: false,
            localized: false,
            models: ['ThemeStyleHeading'],
            group: 'text-styles',
            readOnly: true
        },
        {
            type: 'model',
            name: 'buttonPrimary',
            label: 'Primary button',
            required: false,
            hidden: false,
            localized: false,
            models: ['ThemeStyleButton'],
            group: 'button-styles',
            readOnly: true
        },
        {
            type: 'model',
            name: 'buttonSecondary',
            label: 'Secondary button',
            required: false,
            hidden: false,
            localized: false,
            models: ['ThemeStyleButton'],
            group: 'button-styles',
            readOnly: true
        },
        {
            type: 'model',
            name: 'linkPrimary',
            label: 'Primary link',
            required: false,
            hidden: false,
            localized: false,
            models: ['ThemeStyleLink'],
            group: 'button-styles',
            readOnly: true
        },
        {
            type: 'model',
            name: 'linkSecondary',
            label: 'Secondary link',
            required: false,
            hidden: false,
            localized: false,
            models: ['ThemeStyleLink'],
            group: 'button-styles',
            readOnly: true
        }
    ]
};

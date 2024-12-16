import { Model } from '@stackbit/types';

export const Config: Model = {
    type: 'data',
    name: 'Config',
    label: 'Config',
    labelField: 'titleSuffix',
    singleInstance: true,
    canDelete: false,
    filePath: 'content/data/site.json',
    fields: [
        {
            type: 'image',
            name: 'favicon',
            label: 'Favicon',
            required: false,
            hidden: false,
            localized: false
        },
        {
            type: 'reference',
            name: 'header',
            label: 'Header configuration',
            required: false,
            hidden: false,
            localized: false,
            models: ['Header']
        },
        {
            type: 'reference',
            name: 'footer',
            label: 'Footer configuration',
            required: false,
            hidden: false,
            localized: false,
            models: ['Footer']
        },
        {
            type: 'string',
            name: 'titleSuffix',
            label: 'Suffix for page titles',
            description:
                'Suffix to append to the title tag of all pages, except in pages where the this behavior is disabled (e.g. typically the home page should have the site name as a prefix)',
            required: false,
            hidden: false,
            localized: false
        },
        {
            type: 'image',
            name: 'defaultSocialImage',
            label: 'Default image for social sharing',
            description:
                'Default image to use for the og:image meta tag in all pages, except in pages that define another image.',
            required: false,
            hidden: false,
            localized: false
        },
        {
            type: 'list',
            name: 'defaultMetaTags',
            label: 'Default additional meta tags',
            description:
                'Additional meta tags to set as default in all pages. Tags defined here are low-priority: they may be overriden by page-level settings.',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: ['MetaTag']
            }
        },
        {
            type: 'boolean',
            name: 'enableAnnotations',
            label: 'Enable annotations (editing highlights)',
            required: false,
            default: true,
            hidden: false,
            localized: false
        }
    ]
};

import { Model } from '@stackbit/types';

export const ImageBlock: Model = {
    type: 'object',
    name: 'ImageBlock',
    label: 'Image Block',
    labelField: 'altText',
    fields: [
        {
            type: 'image',
            name: 'url',
            label: 'Image',
            description: 'The URL of the image',
            required: false,
            hidden: false,
            localized: false
        },
        {
            type: 'string',
            name: 'altText',
            label: 'Alt text',
            description: 'The alt text of the image',
            required: false,
            default: 'altText of the image',
            hidden: false,
            localized: false
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
                    borderRadius: '*'
                }
            }
        }
    ],
    fieldGroups: [
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
        }
    ]
};

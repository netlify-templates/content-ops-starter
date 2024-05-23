import { Model } from '@stackbit/types';

export const VideoBlock: Model = {
    type: 'object',
    name: 'VideoBlock',
    label: 'Video Block',
    labelField: 'title',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            description: 'The value of the field is used for presentation purposes in Netlify Create',
            required: false,
            default: 'Title of the video',
            hidden: false,
            localized: false
        },
        {
            type: 'string',
            name: 'url',
            label: 'Video URL (YouTube, Vimeo, .mp4)',
            required: false,
            default: 'https://youtu.be/CXnUX2EkicE',
            hidden: false,
            localized: false
        },
        {
            type: 'boolean',
            name: 'autoplay',
            label: 'Autoplay',
            required: false,
            default: false,
            hidden: false,
            localized: false
        },
        {
            type: 'boolean',
            name: 'loop',
            label: 'Loop',
            required: false,
            default: false,
            hidden: false,
            localized: false
        },
        {
            type: 'boolean',
            name: 'muted',
            label: 'Muted',
            required: false,
            default: false,
            hidden: false,
            localized: false
        },
        {
            type: 'boolean',
            name: 'controls',
            label: 'Controls',
            required: false,
            default: true,
            hidden: false,
            localized: false
        },
        {
            type: 'enum',
            name: 'aspectRatio',
            label: 'Aspect ratio',
            required: false,
            default: '16:9',
            hidden: false,
            localized: false,
            options: [
                {
                    label: '4:3',
                    value: '4:3'
                },
                {
                    label: '16:9',
                    value: '16:9'
                }
            ],
            group: 'styles',
            controlType: 'button-group'
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

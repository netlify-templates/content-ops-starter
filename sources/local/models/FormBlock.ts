import { Model } from '@stackbit/types';

export const FormBlock: Model = {
    type: 'object',
    name: 'FormBlock',
    label: 'Form Block',
    labelField: 'elementId',
    fields: [
        {
            type: 'list',
            name: 'fields',
            label: 'Fields',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: ['TextFormControl', 'EmailFormControl', 'TextareaFormControl', 'CheckboxFormControl', 'SelectFormControl']
            }
        },
        {
            type: 'model',
            name: 'submitButton',
            label: 'Submit button',
            required: false,
            hidden: false,
            localized: false,
            models: ['SubmitButtonFormControl']
        },
        {
            type: 'string',
            name: 'elementId',
            label: 'Element ID',
            description: 'The unique ID used for id and name attributes, must not contain whitespace',
            required: true,
            default: 'contact-form',
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
                    justifyContent: ['flex-start', 'flex-end', 'center'],
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

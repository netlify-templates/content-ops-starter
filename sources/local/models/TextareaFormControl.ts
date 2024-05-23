import { Model } from '@stackbit/types';

export const TextareaFormControl: Model = {
  type: 'object',
  name: 'TextareaFormControl',
  label: 'Textarea Form Control',
  labelField: 'label',
  fields: [
    {
      type: 'string',
      name: 'name',
      label: 'Name',
      description: 'Must be unique and not contain whitespace. This is the property name that will be sent to the server with this field value.',
      required: true,
      default: 'message',
      hidden: false,
      localized: false
    },
    {
      type: 'string',
      name: 'label',
      label: 'Label',
      required: false,
      default: 'Message',
      hidden: false,
      localized: false
    },
    {
      type: 'boolean',
      name: 'hideLabel',
      label: 'Hide label',
      required: false,
      default: false,
      hidden: false,
      localized: false
    },
    {
      type: 'string',
      name: 'placeholder',
      label: 'Placeholder text',
      required: false,
      default: 'Your message',
      hidden: false,
      localized: false
    },
    {
      type: 'boolean',
      name: 'isRequired',
      label: 'Is the field required?',
      required: false,
      default: false,
      hidden: false,
      localized: false
    },
    {
      type: 'enum',
      name: 'width',
      label: 'Width',
      required: false,
      default: 'full',
      hidden: false,
      localized: false,
      options: [
        {
          label: 'Full',
          value: 'full'
        },
        {
          label: 'One half',
          value: '1/2'
        }
      ],
      group: 'styles',
      controlType: 'button-group'
    }
  ],
  fieldGroups: [
    {
      name: 'styles',
      label: 'Styles',
      icon: 'palette'
    }
  ]
};
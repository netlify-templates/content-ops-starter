import { Model } from '@stackbit/types';

export const SelectFormControl: Model = {
  type: 'object',
  name: 'SelectFormControl',
  label: 'Select Form Control',
  labelField: 'label',
  fields: [
    {
      type: 'string',
      name: 'name',
      label: 'Name',
      description: 'Must be unique and not contain whitespace. This is the property name that will be sent to the server with this field value.',
      required: true,
      default: 'company-size',
      hidden: false,
      localized: false
    },
    {
      type: 'string',
      name: 'label',
      label: 'Label',
      required: false,
      default: 'Company size',
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
      name: 'defaultValue',
      label: 'Default value',
      required: false,
      default: 'Please choose...',
      hidden: false,
      localized: false
    },
    {
      type: 'list',
      name: 'options',
      label: 'Options',
      required: false,
      hidden: false,
      localized: false,
      items: {
        type: 'string'
      }
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
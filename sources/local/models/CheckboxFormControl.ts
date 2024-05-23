import { Model } from '@stackbit/types';

export const CheckboxFormControl: Model = {
  type: 'object',
  name: 'CheckboxFormControl',
  label: 'CheckboxFormControl',
  labelField: 'label',
  fields: [
    {
      type: 'string',
      name: 'name',
      label: 'Name',
      description: 'Must be unique and not contain whitespace. This is the property name that will be sent to the server with this field value.',
      required: true,
      default: 'updates',
      hidden: false,
      localized: false
    },
    {
      type: 'string',
      name: 'label',
      label: 'Label',
      required: false,
      default: 'Sign me up to receive updates',
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
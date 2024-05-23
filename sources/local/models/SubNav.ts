import { Model } from '@stackbit/types';

export const SubNav: Model = {
  type: 'object',
  name: 'SubNav',
  label: 'Sub-navigation',
  labelField: 'label',
  fields: [
    {
      type: 'string',
      name: 'label',
      label: 'Label',
      required: false,
      hidden: false,
      localized: false
    },
    {
      type: 'string',
      name: 'altText',
      label: 'Alt text',
      required: false,
      hidden: false,
      localized: false
    },
    {
      type: 'list',
      name: 'links',
      label: 'Links',
      required: false,
      hidden: false,
      localized: false,
      items: {
        type: 'model',
        models: [
          'Link'
        ]
      }
    },
    {
      type: 'enum',
      name: 'labelStyle',
      label: 'Label style',
      required: false,
      default: 'primary',
      hidden: false,
      localized: false,
      options: [
        {
          label: 'Primary',
          value: 'primary'
        },
        {
          label: 'Secondary',
          value: 'secondary'
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
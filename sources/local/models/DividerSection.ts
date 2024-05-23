import { Model } from '@stackbit/types';

export const DividerSection: Model = {
  type: 'object',
  name: 'DividerSection',
  label: 'Divider',
  labelField: 'title',
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      description: 'The value of the field is used for presentation purposes in Netlify Create',
      required: false,
      default: 'Divider',
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
      type: 'enum',
      name: 'colors',
      label: 'Colors',
      description: 'The color theme of the section',
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
          margin: [
            'tw0:96'
          ],
          padding: [
            'tw0:96'
          ]
        }
      }
    }
  ],
  thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
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
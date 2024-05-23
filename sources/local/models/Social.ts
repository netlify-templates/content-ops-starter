import { Model } from '@stackbit/types';

export const Social: Model = {
  type: 'object',
  name: 'Social',
  label: 'Social',
  labelField: 'altText',
  fields: [
    {
      type: 'string',
      name: 'altText',
      label: 'Alt text',
      description: 'The alternative text for screen readers',
      required: false,
      default: '',
      hidden: false,
      localized: false
    },
    {
      type: 'string',
      name: 'url',
      label: 'URL',
      required: true,
      default: '/',
      hidden: false,
      localized: false
    },
    {
      type: 'enum',
      name: 'icon',
      label: 'Icon',
      required: true,
      default: 'facebook',
      hidden: false,
      localized: false,
      options: [
        {
          label: 'Facebook',
          value: 'facebook'
        },
        {
          label: 'GitHub',
          value: 'github'
        },
        {
          label: 'Instagram',
          value: 'instagram'
        },
        {
          label: 'LinkedIn',
          value: 'linkedin'
        },
        {
          label: 'Mail',
          value: 'mail'
        },
        {
          label: 'Reddit',
          value: 'reddit'
        },
        {
          label: 'Twitter',
          value: 'twitter'
        },
        {
          label: 'Vimeo',
          value: 'vimeo'
        },
        {
          label: 'YouTube',
          value: 'youtube'
        }
      ],
      group: 'styles'
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
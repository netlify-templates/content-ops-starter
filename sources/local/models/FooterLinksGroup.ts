import { Model } from '@stackbit/types';

export const FooterLinksGroup: Model = {
  type: 'object',
  name: 'FooterLinksGroup',
  label: 'Footer Links Group',
  labelField: 'title',
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      required: false,
      default: 'Your Brand',
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
          'Button',
          'Link'
        ]
      }
    },
    {
      type: 'json',
      name: 'styles',
      label: 'Styles',
      description: 'The styles field is controlled by Netlify Create editor',
      required: false,
      hidden: false,
      localized: false
    }
  ]
};
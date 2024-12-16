import { Model } from '@stackbit/types';

export const ThemeStyleLink: Model = {
  type: 'object',
  name: 'ThemeStyleLink',
  label: 'Theme Style Link',
  labelField: 'weight',
  fields: [
    {
      type: 'enum',
      name: 'weight',
      label: 'Font weight',
      required: false,
      hidden: false,
      localized: false,
      options: [
        {
          label: 'Normal',
          value: 'normal'
        },
        {
          label: 'Medium',
          value: 'medium'
        },
        {
          label: 'Bold',
          value: 'bold'
        }
      ],
      controlType: 'button-group'
    },
    {
      type: 'enum',
      name: 'case',
      label: 'Case',
      required: false,
      hidden: false,
      localized: false,
      options: [
        {
          label: 'Default',
          value: 'none'
        },
        {
          label: 'ag',
          value: 'lowercase'
        },
        {
          label: 'Ag',
          value: 'capitalize'
        },
        {
          label: 'AG',
          value: 'uppercase'
        }
      ],
      controlType: 'button-group'
    },
    {
      type: 'enum',
      name: 'letterSpacing',
      label: 'Letter spacing',
      required: false,
      hidden: false,
      localized: false,
      options: [
        {
          label: 'Tighter',
          value: 'tighter'
        },
        {
          label: 'Tight',
          value: 'tight'
        },
        {
          label: 'Normal',
          value: 'normal'
        },
        {
          label: 'Wide',
          value: 'wide'
        },
        {
          label: 'Wider',
          value: 'wider'
        }
      ],
      controlType: 'button-group'
    }
  ],
};
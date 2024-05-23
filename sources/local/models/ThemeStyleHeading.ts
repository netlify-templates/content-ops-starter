import { Model } from '@stackbit/types';

export const ThemeStyleHeading: Model = {
  type: 'object',
  name: 'ThemeStyleHeading',
  label: 'Theme Style Heading',
  labelField: 'size',
  fields: [
    {
      type: 'enum',
      name: 'size',
      label: 'Font size',
      required: false,
      default: '5xl',
      hidden: false,
      localized: false,
      options: [
        {
          label: 'XS',
          value: 'xs'
        },
        {
          label: 'SM',
          value: 'sm'
        },
        {
          label: 'Base',
          value: 'base'
        },
        {
          label: 'LG',
          value: 'lg'
        },
        {
          label: 'XL',
          value: 'xl'
        },
        {
          label: '2XL',
          value: '2xl'
        },
        {
          label: '3XL',
          value: '3xl'
        },
        {
          label: '4XL',
          value: '4xl'
        },
        {
          label: '5XL',
          value: '5xl'
        },
        {
          label: '6XL',
          value: '6xl'
        },
        {
          label: '7XL',
          value: '7xl'
        },
        {
          label: '8XL',
          value: '8xl'
        },
        {
          label: '9XL',
          value: '9xl'
        }
      ]
    },
    {
      type: 'enum',
      name: 'weight',
      label: 'Font weight',
      required: false,
      default: 'bold',
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
      name: 'decoration',
      label: 'Decoration',
      required: false,
      default: 'none',
      hidden: false,
      localized: false,
      options: [
        {
          label: 'None',
          value: 'none'
        },
        {
          label: 'Underline',
          value: 'underline'
        },
        {
          label: 'Line through',
          value: 'line-through'
        }
      ],
      controlType: 'button-group'
    },
    {
      type: 'enum',
      name: 'case',
      label: 'Case',
      required: false,
      default: 'none',
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
      default: 'normal',
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
  ]
};
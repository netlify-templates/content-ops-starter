import { Model } from '@stackbit/types';

export const ThemeStyleButton: Model = {
  type: 'object',
  name: 'ThemeStyleButton',
  label: 'Theme Style Button',
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
    },
    {
      type: 'enum',
      name: 'borderRadius',
      label: 'Corner radius',
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
          label: 'Small',
          value: 'DEFAULT'
        },
        {
          label: 'Medium',
          value: 'lg'
        },
        {
          label: 'Large',
          value: 'xl'
        },
        {
          label: 'XLarge',
          value: 'full'
        }
      ],
      controlType: 'button-group'
    },
    {
      type: 'enum',
      name: 'shadow',
      label: 'Shadow',
      required: false,
      hidden: false,
      localized: false,
      options: [
        {
          label: 'None',
          value: 'none'
        },
        {
          label: 'Mild',
          value: 'md'
        },
        {
          label: 'Float',
          value: 'xl'
        }
      ],
      controlType: 'button-group'
    },
    {
      type: 'number',
      name: 'horizontalPadding',
      label: 'Horizontal padding',
      required: false,
      hidden: false,
      localized: false,
      subtype: 'int',
      min: 0,
      max: 30,
      controlType: 'slider',
      unit: 'px'
    },
    {
      type: 'number',
      name: 'verticalPadding',
      label: 'Vertical padding',
      required: false,
      hidden: false,
      localized: false,
      subtype: 'int',
      min: 0,
      max: 30,
      controlType: 'slider',
      unit: 'px'
    }
  ],
  readOnly: true
};
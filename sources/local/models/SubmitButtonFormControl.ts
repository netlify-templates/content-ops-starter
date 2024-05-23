import { Model } from '@stackbit/types';

export const SubmitButtonFormControl: Model = {
  type: 'object',
  name: 'SubmitButtonFormControl',
  label: 'Submit Button',
  labelField: 'label',
  fields: [
    {
      type: 'string',
      name: 'label',
      label: 'Label',
      required: false,
      default: 'Submit',
      hidden: false,
      localized: false
    },
    {
      type: 'boolean',
      name: 'showIcon',
      label: 'Show icon',
      required: false,
      default: false,
      hidden: false,
      localized: false,
      group: 'styles'
    },
    {
      type: 'enum',
      name: 'icon',
      label: 'Icon',
      required: false,
      default: 'arrowRight',
      hidden: false,
      localized: false,
      options: [
        {
          label: 'Arrow down',
          value: 'arrowDown'
        },
        {
          label: 'Arrow left',
          value: 'arrowLeft'
        },
        {
          label: 'Arrow right',
          value: 'arrowRight'
        },
        {
          label: 'Arrow up',
          value: 'arrowUp'
        },
        {
          label: 'Chevron down',
          value: 'chevronDown'
        },
        {
          label: 'Chevron left',
          value: 'chevronLeft'
        },
        {
          label: 'Chevron big left',
          value: 'chevronBigLeft'
        },
        {
          label: 'Chevron right',
          value: 'chevronRight'
        },
        {
          label: 'Chevron big right',
          value: 'chevronBigRight'
        },
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
          label: 'Play',
          value: 'play'
        },
        {
          label: 'Reddit',
          value: 'reddit'
        },
        {
          label: 'Send',
          value: 'send'
        },
        {
          label: 'Shopping bag',
          value: 'shoppingBag'
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
      type: 'enum',
      name: 'iconPosition',
      label: 'Icon position',
      required: false,
      default: 'right',
      hidden: false,
      localized: false,
      options: [
        {
          label: 'Left',
          value: 'left'
        },
        {
          label: 'Right',
          value: 'right'
        }
      ],
      group: 'styles',
      controlType: 'button-group'
    },
    {
      type: 'enum',
      name: 'style',
      label: 'Style',
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
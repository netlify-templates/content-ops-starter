import * as React from 'react';
import classNames from 'classnames';

import { iconMap } from '../../../svgs';

export default function SubmitButtonFormControl(props) {
    const { elementId, className, label, showIcon, icon, iconPosition = 'right', style = 'primary' } = props;
    const IconComponent = icon ? iconMap[icon] : null;
    const fieldPath = props['data-sb-field-path'];
    const annotations = fieldPath ? { 'data-sb-field-path': [fieldPath, `${fieldPath}.elementId#@id`].join(' ').trim() } : {};

    return (
        <button
            type="submit"
            id={elementId}
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-button',
                {
                    'sb-component-button-primary': style === 'primary',
                    'sb-component-button-secondary': style === 'secondary'
                },
                className
            )}
            {...annotations}
        >
            {label && <span {...(fieldPath && { 'data-sb-field-path': '.label' })}>{label}</span>}
            {showIcon && IconComponent && (
                <IconComponent
                    className={classNames('shrink-0', 'fill-current', 'w-[1.25em]', 'h-[1.25em]', {
                        'order-first': iconPosition === 'left',
                        'mr-[0.5em]': label && iconPosition === 'left',
                        'ml-[0.5em]': label && iconPosition === 'right'
                    })}
                    {...(fieldPath && { 'data-sb-field-path': '.icon' })}
                />
            )}
        </button>
    );
}

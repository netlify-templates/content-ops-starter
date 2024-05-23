import * as React from 'react';
import classNames from 'classnames';

export default function CheckboxFormControl(props) {
    const { label, name, isRequired, width = 'full' } = props;
    const fieldPath = props['data-sb-field-path'];
    const labelId = `${name}-label`;
    const attr: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> = {};
    if (label) {
        attr['aria-labelledby'] = labelId;
    }
    if (isRequired) {
        attr.required = true;
    }

    return (
        <div
            className={classNames('sb-form-control', {
                'sm:col-span-2': width === 'full'
            })}
            data-sb-field-path={fieldPath}
        >
            <div className="flex items-center">
                <input
                    id={name}
                    className="sb-checkbox absolute h-6 w-6 appearance-none select-none opacity-0"
                    type="checkbox"
                    name={name}
                    {...attr}
                    {...(fieldPath && { 'data-sb-field-path': '.name#@id .name#@name' })}
                />
                {label && (
                    <label
                        id={labelId}
                        className={classNames(
                            'sb-label',
                            'inline-block',
                            'cursor-pointer',
                            'pl-10',
                            'relative',
                            // Checkbox on left:
                            'before:absolute',
                            'before:h-6',
                            'before:w-6',
                            'before:leading-6',
                            'before:left-0',
                            'before:top-1/2',
                            'before:-translate-y-1/2',
                            'before:border',
                            'before:border-current',
                            'before:cursor-pointer',
                            'before:text-center'
                        )}
                        htmlFor={name}
                        {...(fieldPath && { 'data-sb-field-path': '.label .name#@for' })}
                    >
                        {label}
                    </label>
                )}
            </div>
        </div>
    );
}

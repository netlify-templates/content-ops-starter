import * as React from 'react';
import classNames from 'classnames';
import Link from '../Link';
import { iconMap } from '../../svgs';

export default function Social(props) {
    const { elementId, className, altText, url, icon = 'facebook' } = props;
    const IconComponent = iconMap[icon];
    const fieldPath = props['data-sb-field-path'];
    const annotations = fieldPath
        ? { 'data-sb-field-path': [fieldPath, `${fieldPath}.url#@href`, `${fieldPath}.altText#@aria-label`, `${fieldPath}.elementId#@id`].join(' ').trim() }
        : {};

    return (
        <Link
            id={elementId}
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-social',
                'inline-flex',
                'items-center',
                'justify-center',
                'transition',
                'duration-200',
                'ease-in',
                'hover:-translate-y-1',
                className
            )}
            href={url}
            aria-label={altText}
            {...annotations}
        >
            {IconComponent && <IconComponent className="shrink-0 fill-current w-[1em] h-[1em]" {...(fieldPath && { 'data-sb-field-path': '.icon' })} />}
        </Link>
    );
}

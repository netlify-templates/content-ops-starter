import * as React from 'react';

export default function ChevronUp({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M6.032 16.363l-1.362-1.395 7.33-7.33 7.33 7.33-1.362 1.395-5.968-5.968z"></path>
        </svg>
    );
}

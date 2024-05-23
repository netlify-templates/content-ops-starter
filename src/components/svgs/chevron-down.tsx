import * as React from 'react';

export default function ChevronDown({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M12 16.362l-7.33-7.363 1.362-1.362 5.968 5.968 5.968-5.968 1.362 1.362z"></path>
        </svg>
    );
}

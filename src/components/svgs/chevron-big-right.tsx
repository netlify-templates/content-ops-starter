import * as React from 'react';

export default function ChevronBigRight({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M8.461 22.65l-1.573-1.573 9.077-9.077-9.077-9.077 1.573-1.573 10.65 10.65z"></path>
        </svg>
    );
}

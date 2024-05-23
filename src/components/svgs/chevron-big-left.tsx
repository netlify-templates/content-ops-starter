import * as React from 'react';

export default function ChevronBigLeft({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M15.539 22.65l-10.65-10.65 10.65-10.65 1.573 1.573-9.105 9.077 9.105 9.077z"></path>
        </svg>
    );
}

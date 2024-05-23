import * as React from 'react';

export default function Close({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M5.558 19.65l-1.208-1.208 6.442-6.442-6.442-6.442 1.208-1.208 6.442 6.442 6.442-6.442 1.208 1.208-6.442 6.442 6.442 6.442-1.208 1.208-6.442-6.442z"></path>
        </svg>
    );
}

import * as React from 'react';

export default function ChevronLeft({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M14.707 18.65l-6.65-6.65 6.65-6.65 1.236 1.236-5.414 5.414 5.414 5.414z"></path>
        </svg>
    );
}

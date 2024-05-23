import * as React from 'react';

export default function ChevronRight({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M9.293 18.65l-1.236-1.236 5.414-5.414-5.414-5.414 1.236-1.236 6.65 6.65z"></path>
        </svg>
    );
}

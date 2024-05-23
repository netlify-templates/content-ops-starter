import * as React from 'react';

export default function Play({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M6.428 19.1v-14.2l11.145 7.1z"></path>
        </svg>
    );
}

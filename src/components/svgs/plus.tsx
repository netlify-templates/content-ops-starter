import * as React from 'react';

export default function Plus({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M11.083 20.25v-7.333h-7.333v-1.833h7.333v-7.333h1.833v7.333h7.333v1.833h-7.333v7.333z"></path>
        </svg>
    );
}

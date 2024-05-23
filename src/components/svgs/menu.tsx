import * as React from 'react';

export default function Menu({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M1.695 18.625v-1.767h20.611v1.767zM1.695 12.883v-1.767h20.611v1.767zM1.695 7.142v-1.767h20.611v1.767z"></path>
        </svg>
    );
}

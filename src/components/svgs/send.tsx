import * as React from 'react';

export default function Send({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M2.214 20.25v-16.5l19.572 8.25zM3.921 17.69l13.484-5.69-13.484-5.69v4.21l6.173 1.479-6.173 1.479zM3.921 17.69v-4.21z"></path>
        </svg>
    );
}

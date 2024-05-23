import * as React from 'react';

export default function ArrowUp({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M11.152 20.625v-13.998l-6.561 6.589-1.216-1.216 8.625-8.625 8.625 8.625-1.216 1.216-6.561-6.589v13.998z"></path>
        </svg>
    );
}

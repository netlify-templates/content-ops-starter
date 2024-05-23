import * as React from 'react';

export default function ArrowRight({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M12 20.625l-1.216-1.216 6.589-6.561h-13.998v-1.697h13.998l-6.589-6.561 1.216-1.216 8.625 8.625z"></path>
        </svg>
    );
}

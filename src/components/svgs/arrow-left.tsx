import * as React from 'react';

export default function ArrowLeft({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M12 20.625l-8.625-8.625 8.625-8.625 1.216 1.216-6.589 6.561h13.998v1.697h-13.998l6.589 6.561z"></path>
        </svg>
    );
}

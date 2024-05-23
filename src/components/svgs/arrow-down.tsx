import * as React from 'react';

export default function ArrowDown({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M12 20.625l-8.625-8.625 1.216-1.216 6.561 6.589v-13.998h1.697v13.998l6.561-6.589 1.216 1.216z"></path>
        </svg>
    );
}

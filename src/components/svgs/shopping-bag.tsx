import * as React from 'react';

export default function ShoppingBag({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M3.711 22.5v-16.579h4.145v-0.276q0-1.713 1.216-2.929t2.929-1.216 2.929 1.216 1.216 2.929v0.276h4.145v16.579zM9.513 5.645v0.276h4.974v-0.276q0-1.050-0.718-1.768t-1.768-0.718-1.768 0.718-0.718 1.768zM5.368 20.842h13.263v-13.263h-2.487v3.316h-1.658v-3.316h-4.974v3.316h-1.658v-3.316h-2.487zM5.368 20.842v-13.263z"></path>
        </svg>
    );
}

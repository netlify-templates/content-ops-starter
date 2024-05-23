import * as React from 'react';

export default function Facebook({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M22.994 12.067c0-6.071-4.923-10.994-10.994-10.994s-10.994 4.923-10.994 10.994c0 5.488 4.020 10.036 9.276 10.86v-7.682h-2.792v-3.179h2.792v-2.421c0-2.755 1.642-4.278 4.153-4.278 1.202 0 2.461 0.215 2.461 0.215v2.705h-1.387c-1.366 0-1.792 0.847-1.792 1.717v2.061h3.049l-0.487 3.179h-2.562v7.682c5.257-0.825 9.277-5.374 9.277-10.861z"></path>
        </svg>
    );
}

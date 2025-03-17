/*
Taken from https://www.algolia.com/doc/ui-libraries/autocomplete/integrations/using-react/#with-react-18
Updated for React 19 compatibility
*/
import { autocomplete } from '@algolia/autocomplete-js';
import React, { createElement, Fragment, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

export default function BaseAutoComplete(props) {
    const containerRef = useRef(null);
    const panelRootRef = useRef(null);
    const rootRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) {
            return undefined;
        }

        const search = autocomplete({
            container: containerRef.current,
            renderer: { createElement, Fragment, render: () => {} },
            render({ children }, root) {
                if (!panelRootRef.current || rootRef.current !== root) {
                    rootRef.current = root;

                    // Properly cleanup previous root before creating a new one
                    if (panelRootRef.current) {
                        panelRootRef.current.unmount();
                    }

                    panelRootRef.current = createRoot(root);
                }

                panelRootRef.current.render(children);
            },
            ...props
        });

        return () => {
            // Ensure proper cleanup
            if (panelRootRef.current) {
                panelRootRef.current.unmount();
            }
            search.destroy();
        };
    }, [props]);

    return <div ref={containerRef} />;
}

/*
Taken from https://www.algolia.com/doc/ui-libraries/autocomplete/integrations/using-react/#with-react-18
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

                    panelRootRef.current?.unmount();
                    panelRootRef.current = createRoot(root);
                }

                panelRootRef.current.render(children);
            },
            shouldPanelOpen: ({ state }) => {
                return state.query !== '' || props.openOnFocus;
            },
            navigator: {
                navigate({ itemUrl }) {
                    window.location.assign(itemUrl);
                },
                navigateNewTab({ itemUrl }) {
                    const windowReference = window.open(itemUrl, '_blank', 'noopener');
                    if (windowReference) {
                        windowReference.focus();
                    }
                },
                navigateNewWindow({ itemUrl }) {
                    window.open(itemUrl, '_blank', 'noopener');
                }
            },
            ...props
        });

        return () => {
            search.destroy();
        };
    }, [props]);

    return <div ref={containerRef} />;
}

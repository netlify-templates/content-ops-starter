import { createContext, useContext, useState } from 'react';
import { NinetailedProvider } from '@ninetailed/experience.js-next';

export const ninetailedApiKey = process.env.NEXT_PUBLIC_NINETAILED_API_KEY || null;
export const ninetailedEnvironment = process.env.NEXT_PUBLIC_NINETAILED_ENVIRONMENT || null;
export const ninetailedEnabled = ninetailedApiKey ? true : false;

// For use in custom App
export function WithNinetailedProvider({ children }) {
    if (ninetailedEnabled) {
        console.log('Ninetailed enabled');
        return (
            <NinetailedProvider clientId={ninetailedApiKey} environment={ninetailedEnvironment}>
                <VariantChoicesProvider>{children}</VariantChoicesProvider>
            </NinetailedProvider>
        );
    } else {
        return children;
    }
}

/* 
  Persist the user-select variant in personalized components (see withPersonalization), 
  so that editing content or navigation will not reset the component to its default (i.e. show the personalized variant).
  However, doing a hard page reload does mean a new context (TODO persist to local storage as well!)
  
  Mapping is: baseline variant ID (Contentful object ID) => selected variant ID, regardless of where the baseline is shown.
*/

const VariantChoicesContext = createContext();

export function VariantChoicesProvider({ children }) {
    const [choices, setChoices] = useState({});

    function updateChoice(baselineVariantId, userSelectedVariantId) {
        const updatedChoices = { ...choices };
        updatedChoices[baselineVariantId] = userSelectedVariantId;
        setChoices(updatedChoices);
    }

    let sharedState = { choices, updateChoice };
    return <VariantChoicesContext.Provider value={sharedState}>{children}</VariantChoicesContext.Provider>;
}

export function useVariantChoicesContext() {
    return useContext(VariantChoicesContext);
}

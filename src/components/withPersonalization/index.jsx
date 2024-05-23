/* eslint-disable react/display-name */
import styles from './styles.module.css';
import { Personalize, usePersonalize } from '@ninetailed/experience.js-next';
import { useVariantChoicesContext, ninetailedEnabled } from '../../utils/ninetailed-helpers';

const isDev = process.env.NODE_ENV === 'development';

const BASELINE_AUDIENCE = 'Baseline';
const PERSONALIZED_VARIANT_ID = '-1';

function getVariants(props) {
    const variants =
        props.nt_variants?.map((item) => ({
            ...item,
            audience: {
                id: item.nt_audience?.nt_audience_id,
                name: item.nt_audience?.nt_name
            }
        })) || [];

    const variantsWithBaseline = [
        {
            audience: {
                name: BASELINE_AUDIENCE
            },
            ...props
        },
        ...variants
    ];

    return [variants, variantsWithBaseline];
}

const withPersonalization =
    (Component, titleField = 'title') =>
    ({ ...baselineProps }) => {
        if (!ninetailedEnabled) return <Component {...baselineProps} />;

        const [variants, variantsWithBaseline] = getVariants(baselineProps);
        if (!isDev) {
            return <Personalize component={Component} variants={variants} {...baselineProps} />;
        }

        function ActualComponent(props) {
            const componentProps = { ...props, path: null, 'data-sb-field-path': null };
            return (
                <div data-sb-object-id={componentProps.__metadata.id}>
                    <Component {...componentProps} />
                </div>
            );
        }

        if (variants.length === 0) {
            return (
                <NotYetPersonalized>
                    <ActualComponent {...baselineProps} />
                </NotYetPersonalized>
            );
        }

        const { loading, variant: personalizedVariant } = usePersonalize(baselineProps, variants);

        const { choices, updateChoice } = useVariantChoicesContext();
        const userSelectedVarId = choices[baselineProps.__metadata.id] || PERSONALIZED_VARIANT_ID;

        const currentVariant =
            userSelectedVarId === PERSONALIZED_VARIANT_ID
                ? personalizedVariant
                : variantsWithBaseline.find((v) => v.__metadata.id === userSelectedVarId) || personalizedVariant;

        if (loading && userSelectedVarId === PERSONALIZED_VARIANT_ID) {
            return (
                <HiddenBaseline>
                    <ActualComponent {...baselineProps} />
                </HiddenBaseline>
            );
        }

        function selectVariantId(selectedId) {
            console.log('selectVariantId', baselineProps.__metadata.id, selectedId);
            updateChoice(baselineProps.__metadata.id, selectedId);
        }

        return (
            <div className={styles.wrapper}>
                <div className={styles.controls}>
                    <VariantSelector
                        variantsWithBaseline={variantsWithBaseline}
                        personalizedVariant={personalizedVariant}
                        userSelectedVarId={userSelectedVarId}
                        selectVariantId={selectVariantId}
                        titleField={titleField}
                    />
                </div>
                <ActualComponent {...currentVariant} />
            </div>
        );
    };

function VariantSelector({ variantsWithBaseline, personalizedVariant, userSelectedVarId, selectVariantId, titleField }) {
    return (
        <select id="variant-selector" onChange={(e) => selectVariantId(e.target.value)} value={userSelectedVarId}>
            <option value={PERSONALIZED_VARIANT_ID}>Personalized</option>
            {variantsWithBaseline.map((variant) => {
                const id = variant.__metadata.id;
                return (
                    <option key={id} value={id}>
                        {`As audience: ${variant.audience.name}`}
                    </option>
                );
            })}
        </select>
    );
}

function NotYetPersonalized({ children }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.controls}>Personalization Opportunity</div>
            {children}
        </div>
    );
}

function HiddenBaseline({ children }) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
}

export default withPersonalization;

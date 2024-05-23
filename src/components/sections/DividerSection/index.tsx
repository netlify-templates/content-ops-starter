import * as React from 'react';
import classNames from 'classnames';

import { getDataAttrs } from '../../../utils/get-data-attrs';
import Section from '../Section';

export default function DividerSection(props) {
    const { elementId, colors, styles = {} } = props;

    return (
        <Section elementId={elementId} className="sb-component-divider-section" colors={colors} styles={styles?.self} {...getDataAttrs(props)}>
            <div className={classNames('sb-divider', 'h-0', 'w-full', 'border-t')}></div>
        </Section>
    );
}

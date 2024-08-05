import * as React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import Section from '../Section';
import TitleBlock from '../../blocks/TitleBlock';
import ImageBlock from '../../blocks/ImageBlock';
import { Action, Badge } from '../../atoms';

export default function FeaturedPeopleSection(props) {
    const { elementId, colors, backgroundImage, badge, title, subtitle, actions = [], people = [], variant, styles = {}, enableAnnotations } = props;

    return (
        <Section
            elementId={elementId}
            className="sb-component-featured-people-section"
            colors={colors}
            backgroundImage={backgroundImage}
            styles={styles?.self}
            {...getDataAttrs(props)}
        >
            <div className={classNames('w-full', 'flex', 'flex-col', mapStyles({ alignItems: styles?.self?.justifyContent ?? 'flex-start' }))}>
                {badge && <Badge {...badge} className="w-full max-w-sectionBody" {...(enableAnnotations && { 'data-sb-field-path': '.badge' })} />}
                {title && (
                    <TitleBlock
                        {...title}
                        className={classNames('w-full', 'max-w-sectionBody', { 'mt-4': badge?.label })}
                        {...(enableAnnotations && { 'data-sb-field-path': '.title' })}
                    />
                )}
                {subtitle && (
                    <p
                        className={classNames(
                            'w-full',
                            'max-w-sectionBody',
                            'text-lg',
                            'sm:text-2xl',
                            styles?.subtitle ? mapStyles(styles?.subtitle) : undefined,
                            {
                                'mt-4': badge?.label || title?.text
                            }
                        )}
                        {...(enableAnnotations && { 'data-sb-field-path': '.subtitle' })}
                    >
                        {subtitle}
                    </p>
                )}
                <FeaturedPeopleVariants
                    variant={variant}
                    people={people}
                    hasTopMargin={!!(badge?.label || title?.text || subtitle)}
                    hasSectionTitle={!!title?.text}
                    hasAnnotations={enableAnnotations}
                />
                {actions.length > 0 && (
                    <div
                        className={classNames('flex', 'flex-wrap', 'items-center', 'gap-4', {
                            'mt-12': badge?.label || title?.text || subtitle || people.length > 0
                        })}
                        {...(enableAnnotations && { 'data-sb-field-path': '.actions' })}
                    >
                        {actions.map((action, index) => (
                            <Action
                                key={index}
                                {...action}
                                className="lg:whitespace-nowrap"
                                {...(enableAnnotations && { 'data-sb-field-path': `.${index}` })}
                            />
                        ))}
                    </div>
                )}
            </div>
        </Section>
    );
}

function FeaturedPeopleVariants(props) {
    const { variant = 'three-col-grid', ...rest } = props;
    switch (variant) {
        case 'four-col-grid':
            return <FeaturedPeopleFourCol {...rest} />;
        case 'mixed-grid':
            return <FeaturedPeopleMixedCol {...rest} />;
        default:
            return <FeaturedPeopleThreeCol {...rest} />;
    }
}

function FeaturedPeopleThreeCol({ people = [], hasTopMargin, hasSectionTitle, hasAnnotations }) {
    if (people.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-10', 'sm:grid-cols-2', 'lg:grid-cols-3', { 'mt-12': hasTopMargin })}
            {...(hasAnnotations && { 'data-sb-field-path': '.people' })}
        >
            {people.map((person, index) => (
                <FeaturedPerson key={index} {...person} hasSectionTitle={hasSectionTitle} {...(hasAnnotations && { 'data-sb-field-path': `.${index}` })} />
            ))}
        </div>
    );
}
function FeaturedPeopleFourCol({ people = [], hasTopMargin, hasSectionTitle, hasAnnotations }) {
    if (people.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-10', 'sm:grid-cols-2', 'lg:grid-cols-4', { 'mt-12': hasTopMargin })}
            {...(hasAnnotations && { 'data-sb-field-path': '.people' })}
        >
            {people.map((person, index) => (
                <FeaturedPerson key={index} {...person} hasSectionTitle={hasSectionTitle} {...(hasAnnotations && { 'data-sb-field-path': `.${index}` })} />
            ))}
        </div>
    );
}

function FeaturedPeopleMixedCol({ people = [], hasTopMargin, hasSectionTitle, hasAnnotations }) {
    if (people.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-10', 'sm:grid-cols-2', 'lg:grid-cols-16', { 'mt-12': hasTopMargin })}
            {...(hasAnnotations && { 'data-sb-field-path': '.people' })}
        >
            {people.map((person, index) => (
                <FeaturedPerson
                    key={index}
                    {...person}
                    hasSectionTitle={hasSectionTitle}
                    {...(hasAnnotations && { 'data-sb-field-path': `.${index}` })}
                    className={classNames('lg:col-span-4', {
                        'lg:col-start-3 lg:col-end-span4': (index + 3) % 7 === 0,
                        'lg:col-start-span4 lg:col-end-neg3': (index + 1) % 7 === 0
                    })}
                />
            ))}
        </div>
    );
}

function FeaturedPerson(props) {
    const { elementId, name, image, role, bio, colors = 'bg-light-fg-dark', styles = {}, className, hasSectionTitle } = props;
    const fieldPath = props['data-sb-field-path'];
    const TitleTag = hasSectionTitle ? 'h3' : 'h2';
    return (
        <div
            id={elementId}
            className={classNames(
                'sb-card',
                colors,
                className,
                'overflow-hidden',
                styles?.self?.margin ? mapStyles({ margin: styles?.self?.margin }) : undefined,
                styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : undefined,
                styles?.self?.borderWidth && styles?.self?.borderWidth !== 0 && styles?.self?.borderStyle !== 'none'
                    ? mapStyles({
                          borderWidth: styles?.self?.borderWidth,
                          borderStyle: styles?.self?.borderStyle,
                          borderColor: styles?.self?.borderColor ?? 'border-primary'
                      })
                    : undefined,
                styles?.self?.borderRadius ? mapStyles({ borderRadius: styles?.self?.borderRadius }) : undefined,
                styles?.self?.textAlign ? mapStyles({ textAlign: styles?.self?.textAlign }) : undefined
            )}
            data-sb-field-path={fieldPath}
        >
            {image && (
                <ImageBlock
                    {...image}
                    className={classNames('flex', mapStyles({ justifyContent: styles?.self?.justifyContent ?? 'flex-start' }))}
                    {...(fieldPath && { 'data-sb-field-path': '.image' })}
                />
            )}
            {name && (
                <TitleTag className="h3" {...(fieldPath && { 'data-sb-field-path': '.name' })}>
                    {name}
                </TitleTag>
            )}
            {role && (
                <p className="mt-2" {...(fieldPath && { 'data-sb-field-path': '.role' })}>
                    {role}
                </p>
            )}
            {bio && (
                <Markdown options={{ forceBlock: true, forceWrapper: true }} className="mt-4 sb-markdown" {...(fieldPath && { 'data-sb-field-path': '.bio' })}>
                    {bio}
                </Markdown>
            )}
        </div>
    );
}

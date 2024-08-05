import * as React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { mapStylesToClassNames as mapStyles } from '../../../../utils/map-styles-to-class-names';
import Action from '../../../atoms/Action';
import ImageBlock from '../../../blocks/ImageBlock';

export default function FeaturedItem(props) {
    const { elementId, title, tagline, subtitle, text, image, actions = [], colors = 'bg-light-fg-dark', styles = {}, hasSectionTitle } = props;
    const fieldPath = props['data-sb-field-path'];
    const TitleTag = hasSectionTitle ? 'h3' : 'h2';
    const flexDirection = styles?.self?.flexDirection ?? 'col';
    const hasTextContent = !!(tagline || title || subtitle || text || actions.length > 0);
    const hasImage = !!image?.url;

    return (
        <div
            id={elementId}
            className={classNames(
                'sb-card',
                colors,
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
                styles?.self?.textAlign ? mapStyles({ textAlign: styles?.self?.textAlign }) : undefined,
                'overflow-hidden'
            )}
            data-sb-field-path={fieldPath}
        >
            <div className={classNames('w-full', 'flex', mapFlexDirectionStyles(flexDirection, hasTextContent, hasImage), 'gap-6')}>
                {hasImage && (
                    <ImageBlock
                        {...image}
                        className={classNames('flex', mapStyles({ justifyContent: styles?.self?.justifyContent ?? 'flex-start' }), {
                            'xs:w-[28.4%] xs:shrink-0': hasTextContent && (flexDirection === 'row' || flexDirection === 'row-reversed')
                        })}
                        {...(fieldPath && { 'data-sb-field-path': '.image' })}
                    />
                )}
                {hasTextContent && (
                    <div
                        className={classNames('w-full', {
                            'xs:grow': hasImage && (flexDirection === 'row' || flexDirection === 'row-reversed')
                        })}
                    >
                        {tagline && (
                            <p className="text-sm" {...(fieldPath && { 'data-sb-field-path': '.tagline' })}>
                                {tagline}
                            </p>
                        )}
                        {title && (
                            <TitleTag
                                className={classNames('h3', {
                                    'mt-2': tagline
                                })}
                                {...(fieldPath && { 'data-sb-field-path': '.title' })}
                            >
                                {title}
                            </TitleTag>
                        )}
                        {subtitle && (
                            <p
                                className={classNames('text-lg', {
                                    'mt-2': tagline || title
                                })}
                                {...(fieldPath && { 'data-sb-field-path': '.subtitle' })}
                            >
                                {subtitle}
                            </p>
                        )}
                        {text && (
                            <Markdown
                                options={{ forceBlock: true, forceWrapper: true }}
                                className={classNames('sb-markdown', {
                                    'mt-4': tagline || title || subtitle
                                })}
                                {...(fieldPath && { 'data-sb-field-path': '.text' })}
                            >
                                {text}
                            </Markdown>
                        )}
                        {actions.length > 0 && (
                            <div
                                className={classNames(
                                    'flex',
                                    'flex-wrap',
                                    mapStyles({ justifyContent: styles?.self?.justifyContent ?? 'flex-start' }),
                                    'items-center',
                                    'gap-4',
                                    {
                                        'mt-6': tagline || title || subtitle || text
                                    }
                                )}
                                {...(fieldPath && { 'data-sb-field-path': '.actions' })}
                            >
                                {actions.map((action, index) => (
                                    <Action
                                        key={index}
                                        {...action}
                                        className="lg:whitespace-nowrap"
                                        {...(fieldPath && { 'data-sb-field-path': `.${index}` })}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

function mapFlexDirectionStyles(flexDirection: string, hasTextContent: boolean, hasImage: boolean) {
    switch (flexDirection) {
        case 'row':
            return hasTextContent && hasImage ? 'flex-col xs:flex-row xs:items-start' : 'flex-col';
        case 'row-reverse':
            return hasTextContent && hasImage ? 'flex-col xs:flex-row-reverse xs:items-start' : 'flex-col';
        case 'col':
            return 'flex-col';
        case 'col-reverse':
            return 'flex-col-reverse';
        default:
            return null;
    }
}

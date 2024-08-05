import * as React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { mapStylesToClassNames as mapStyles } from '../../../../utils/map-styles-to-class-names';
import Action from '../../../atoms/Action';
import PlusIcon from '../../../svgs/plus';
import CloseIcon from '../../../svgs/close';

export default function FeaturedItemToggle(props) {
    const { elementId, title, subtitle, text, actions = [], colors = 'bg-light-fg-dark', styles = {}, hasSectionTitle } = props;
    const fieldPath = props['data-sb-field-path'];
    const TitleTag = hasSectionTitle ? 'h3' : 'h2';
    const [isActive, setIsActive] = React.useState(false);

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
            {title && (
                <TitleTag className="relative pr-8 cursor-pointer h3" onClick={() => setIsActive(!isActive)}>
                    <span {...(fieldPath && { 'data-sb-field-path': '.title' })}>{title}</span>
                    <span className="absolute right-0 -translate-y-1/2 top-1/2">
                        <PlusIcon className={classNames('w-6', 'h-6', 'fill-current', isActive ? 'hidden' : null)} />
                        <CloseIcon className={classNames('w-6', 'h-6', 'fill-current', !isActive ? 'hidden' : null)} />
                    </span>
                </TitleTag>
            )}
            {(subtitle || text || actions.length > 0) && (
                <div className={classNames('mt-6', !isActive ? 'hidden' : undefined)}>
                    {subtitle && (
                        <p
                            className={classNames('text-lg', {
                                'mt-2': title
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
                                'mt-4': title || subtitle
                            })}
                            {...(fieldPath && { 'data-sb-field-path': '.text' })}
                        >
                            {text}
                        </Markdown>
                    )}
                    {actions.length > 0 && (
                        <div
                            className={classNames('flex', 'flex-wrap', 'items-center', 'gap-4', {
                                'mt-6': title || subtitle || text
                            })}
                            {...(fieldPath && { 'data-sb-field-path': '.actions' })}
                        >
                            {actions.map((action, index) => (
                                <Action key={index} {...action} className="lg:whitespace-nowrap" {...(fieldPath && { 'data-sb-field-path': `.${index}` })} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

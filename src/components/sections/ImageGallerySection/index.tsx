import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import Section from '../Section';
import TitleBlock from '../../blocks/TitleBlock';
import ImageBlock from '../../blocks/ImageBlock';
import Badge from '../../atoms/Badge';

export default function ImageGallerySection(props) {
    const { elementId, colors, backgroundImage, badge, title, subtitle, images = [], motion, styles = {}, enableAnnotations } = props;

    return (
        <Section
            elementId={elementId}
            className="sb-component-image-gallery-section"
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
                <ImageGalleryVariants
                    motion={motion}
                    images={images}
                    hasTopMargin={!!(badge?.label || title?.text || subtitle)}
                    justifyContent={styles?.self?.justifyContent}
                    hasAnnotations={enableAnnotations}
                />
            </div>
        </Section>
    );
}

function ImageGalleryVariants(props) {
    const { motion = 'static' } = props;
    switch (motion) {
        case 'move-to-left':
        case 'move-to-right':
            return <ImageGalleryAnimatedGrid {...props} />;
        default:
            return <ImageGalleryStaticGrid {...props} />;
    }
}

function ImageGalleryStaticGrid({ images = [], hasTopMargin, justifyContent = 'flex-start', hasAnnotations }) {
    if (images.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('w-full', 'flex', 'flex-wrap', 'items-center', mapStyles({ justifyContent: justifyContent }), { 'mt-12': hasTopMargin })}
            {...(hasAnnotations && { 'data-sb-field-path': '.images' })}
        >
            {images.map((image, index) => (
                <ImageBlock key={index} {...image} {...(hasAnnotations && { 'data-sb-field-path': `.${index}` })} />
            ))}
        </div>
    );
}

function ImageGalleryAnimatedGrid({ images = [], motion, hasTopMargin, hasAnnotations }) {
    if (images.length === 0) {
        return null;
    }
    const itemCount = images.length;
    const imageGridStyle = {
        '--sb-slide-speed': `${itemCount * 8}s`
    } as React.CSSProperties;
    return (
        <div className="w-full">
            <div
                className={classNames(
                    'sb-image-strip-wrap',
                    'relative',
                    'before:absolute',
                    'before:h-full',
                    'before:w-1/6',
                    'before:left-0',
                    'before:top-0',
                    'before:content-[""]',
                    'before:bg-gradient-to-l',
                    'before:z-10',
                    'after:absolute',
                    'after:h-full',
                    'after:w-1/6',
                    'after:right-0',
                    'after:top-0',
                    'after:content-[""]',
                    'after:bg-gradient-to-r',
                    'after:z-10',
                    { 'mt-12': hasTopMargin }
                )}
            >
                <div className={classNames('sb-image-strip', 'overflow-hidden', 'whitespace-nowrap', 'relative')} style={imageGridStyle}>
                    <div
                        className={classNames(
                            'sb-image-strip-track',
                            'flex',
                            ' items-center',
                            'w-max',
                            motion === 'move-to-left' ? 'sb-animate-slide-left' : 'sb-animate-slide-right'
                        )}
                    >
                        <div className="sb-image-strip-content flex justify-around" {...(hasAnnotations && { 'data-sb-field-path': '.images' })}>
                            {images.map((image, index) => (
                                <ImageBlock key={index} {...image} {...(hasAnnotations && { 'data-sb-field-path': `.${index}` })} />
                            ))}
                        </div>
                        <div className="sb-image-strip-content flex justify-around" {...(hasAnnotations && { 'data-sb-field-path': '.images' })}>
                            {images.map((image, index) => (
                                <ImageBlock key={index} {...image} {...(hasAnnotations && { 'data-sb-field-path': `.${index}` })} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

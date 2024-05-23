import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import Section from '../Section';
import { Action, Badge } from '../../atoms';
import TitleBlock from '../../blocks/TitleBlock';
import PostFeedItem from './PostFeedItem';

export default function PostFeedSection(props) {
    const {
        elementId,
        colors,
        backgroundImage,
        badge,
        title,
        subtitle,
        posts = [],
        showThumbnail,
        showExcerpt,
        showDate,
        showAuthor,
        pageLinks,
        searchBox,
        actions = [],
        variant,
        hoverEffect,
        styles = {},
        annotatePosts,
        enableAnnotations
    } = props;

    return (
        <Section
            elementId={elementId}
            className="sb-component-post-feed-section"
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
                {searchBox}
                <PostFeedVariants
                    variant={variant}
                    posts={posts}
                    showThumbnail={showThumbnail}
                    showExcerpt={showExcerpt}
                    showDate={showDate}
                    showAuthor={showAuthor}
                    hoverEffect={hoverEffect}
                    hasTopMargin={!!(badge?.label || title?.text || subtitle)}
                    hasSectionTitle={!!title?.text}
                    hasAnnotations={enableAnnotations}
                    annotatePosts={annotatePosts}
                />
                {actions.length > 0 && (
                    <div
                        className={classNames('flex', 'flex-wrap', 'items-center', 'gap-4', {
                            'mt-12': badge?.label || title?.text || subtitle || posts.length > 0
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
                {pageLinks}
            </div>
        </Section>
    );
}

function PostFeedVariants(props) {
    const { variant = 'three-col-grid', ...rest } = props;
    switch (variant) {
        case 'two-col-grid':
            return <PostFeedTwoColGrid {...rest} />;
        case 'small-list':
            return <PostFeedSmallList {...rest} />;
        case 'big-list':
            return <PostFeedBigList {...rest} />;
        default:
            return <PostFeedThreeColGrid {...rest} />;
    }
}

function PostFeedThreeColGrid(props) {
    const {
        posts = [],
        showThumbnail,
        showExcerpt,
        showDate,
        showAuthor,
        hasTopMargin,
        hasSectionTitle,
        hoverEffect,
        colors,
        hasAnnotations,
        annotatePosts
    } = props;
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('w-full', 'grid', 'gap-10', 'sm:grid-cols-2', 'lg:grid-cols-3', {
                'mt-12': hasTopMargin
            })}
            {...(hasAnnotations && annotatePosts && { 'data-sb-field-path': '.posts' })}
        >
            {posts.map((post, index) => (
                <PostFeedItem
                    key={index}
                    post={post}
                    showThumbnail={showThumbnail}
                    showExcerpt={showExcerpt}
                    showDate={showDate}
                    showAuthor={showAuthor}
                    hasSectionTitle={hasSectionTitle}
                    hoverEffect={hoverEffect}
                    sectionColors={colors}
                    hasAnnotations={hasAnnotations}
                />
            ))}
        </div>
    );
}

function PostFeedTwoColGrid(props) {
    const {
        posts = [],
        showThumbnail,
        showExcerpt,
        showDate,
        showAuthor,
        hasTopMargin,
        hasSectionTitle,
        hoverEffect,
        colors,
        hasAnnotations,
        annotatePosts
    } = props;
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('w-full', 'grid', 'gap-10', 'sm:grid-cols-2', { 'mt-12': hasTopMargin })}
            {...(hasAnnotations && annotatePosts && { 'data-sb-field-path': '.posts' })}
        >
            {posts.map((post, index) => (
                <PostFeedItem
                    key={index}
                    post={post}
                    showThumbnail={showThumbnail}
                    showExcerpt={showExcerpt}
                    showDate={showDate}
                    showAuthor={showAuthor}
                    hasSectionTitle={hasSectionTitle}
                    hoverEffect={hoverEffect}
                    sectionColors={colors}
                    hasAnnotations={hasAnnotations}
                />
            ))}
        </div>
    );
}

function PostFeedSmallList(props) {
    const {
        posts = [],
        showThumbnail,
        showExcerpt,
        showDate,
        showAuthor,
        hasTopMargin,
        hasSectionTitle,
        hoverEffect,
        colors,
        hasAnnotations,
        annotatePosts
    } = props;
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('w-full', 'max-w-3xl', 'grid', 'gap-10', { 'mt-12': hasTopMargin })}
            {...(hasAnnotations && annotatePosts && { 'data-sb-field-path': '.posts' })}
        >
            {posts.map((post, index) => (
                <PostFeedItem
                    key={index}
                    post={post}
                    showThumbnail={showThumbnail}
                    showExcerpt={showExcerpt}
                    showDate={showDate}
                    showAuthor={showAuthor}
                    hasSectionTitle={hasSectionTitle}
                    hoverEffect={hoverEffect}
                    sectionColors={colors}
                    hasAnnotations={hasAnnotations}
                />
            ))}
        </div>
    );
}

function PostFeedBigList(props) {
    const {
        posts = [],
        showThumbnail,
        showExcerpt,
        showDate,
        showAuthor,
        hasTopMargin,
        hasSectionTitle,
        hoverEffect,
        colors,
        hasAnnotations,
        annotatePosts
    } = props;
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('w-full', 'grid', 'gap-10', { 'mt-12': hasTopMargin })}
            {...(hasAnnotations && annotatePosts && { 'data-sb-field-path': '.posts' })}
        >
            {posts.map((post, index) => (
                <PostFeedItem
                    key={index}
                    post={post}
                    showThumbnail={showThumbnail}
                    showExcerpt={showExcerpt}
                    showDate={showDate}
                    showAuthor={showAuthor}
                    hasSectionTitle={hasSectionTitle}
                    hasBigThumbnail={true}
                    hoverEffect={hoverEffect}
                    sectionColors={colors}
                    hasAnnotations={hasAnnotations}
                />
            ))}
        </div>
    );
}

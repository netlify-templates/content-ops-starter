import * as React from 'react';
import classNames from 'classnames';

import Link from '../../atoms/Link';
import { getComponent } from '../../components-registry';
import { getBaseLayoutComponent } from '../../../utils/base-layout';
import ChevronLeftIcon from '../../svgs/chevron-left';
import ChevronRightIcon from '../../svgs/chevron-right';

export default function PostFeedLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const { enableAnnotations = true } = site;
    const { title, topSections = [], bottomSections = [], pageIndex, baseUrlPath, numOfPages, enableSearch, items, postFeed } = page;
    const PostFeedSection = getComponent('PostFeedSection');
    const pageLinks = PageLinks({ pageIndex, baseUrlPath, numOfPages });
    const searchBox = SearchBox({ enableSearch });

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-page-layout">
                {title && (
                    <h1 className="sr-only" {...(enableAnnotations && { 'data-sb-field-path': 'title' })}>
                        {title}
                    </h1>
                )}
                {renderSections(topSections, 'topSections', enableAnnotations)}
                <PostFeedSection
                    {...postFeed}
                    posts={items}
                    pageLinks={pageLinks}
                    searchBox={searchBox}
                    enableAnnotations={enableAnnotations}
                    {...(enableAnnotations && { 'data-sb-field-path': 'postFeed' })}
                />
                {renderSections(bottomSections, 'bottomSections', enableAnnotations)}
            </main>
        </BaseLayout>
    );
}

function renderSections(sections: any[], fieldName: string, enableAnnotations: boolean) {
    if (sections.length === 0) {
        return null;
    }
    return (
        <div {...(enableAnnotations && { 'data-sb-field-path': fieldName })}>
            {sections.map((section, index) => {
                const Component = getComponent(section.__metadata.modelName);
                if (!Component) {
                    throw new Error(`no component matching the page section's model name: ${section.__metadata.modelName}`);
                }
                return (
                    <Component
                        key={index}
                        {...section}
                        enableAnnotations={enableAnnotations}
                        {...(enableAnnotations && { 'data-sb-field-path': `${fieldName}.${index}` })}
                    />
                );
            })}
        </div>
    );
}

function SearchBox({ enableSearch }) {
    if (!enableSearch) {
        return null;
    }
    const AutoCompletePosts = getComponent('AutoCompletePosts');
    const searchBoxStyle = {
        '--aa-text-color-rgb': '2,0,29',
        '--aa-muted-color-rgb': '2,0,29',
        '--aa-muted-color-alpha': 0.5,
        '--aa-input-border-color-rgb': '2,0,29',
        '--aa-input-border-color-alpha': 0.25,
        '--aa-primary-color-rgb': '2,0,29'
    } as React.CSSProperties;
    return (
        <div className="w-full mb-9" style={searchBoxStyle}>
            <AutoCompletePosts />
        </div>
    );
}

function PageLinks({ pageIndex, baseUrlPath, numOfPages }) {
    if (numOfPages < 2) {
        return null;
    }
    const pageLinks = [];
    const padRange = 2;
    const startIndex = pageIndex - padRange > 2 ? pageIndex - padRange : 0;
    const endIndex = pageIndex + padRange < numOfPages - 3 ? pageIndex + padRange : numOfPages - 1;

    // following logic renders pagination controls:
    // for example, if the current page is 6 (pageIndex === 5)
    //              ↓
    // ← 1 ... 4 5 6 7 8 ... 20 →
    //         ↑       ↑
    // and padRange === 2, then it renders from 4 (6 - 2) to 8 (6 + 2)

    // renders prev "←" button, if the current page is the first page, the button is disabled
    if (pageIndex > 0) {
        pageLinks.push(
            <PageLink key="prev" pageIndex={pageIndex - 1} baseUrlPath={baseUrlPath}>
                <ChevronLeftIcon className="fill-current h-6 w-6" />
            </PageLink>
        );
    } else {
        pageLinks.push(
            <PageLinkDisabled key="prev">
                <ChevronLeftIcon className="fill-current h-6 w-6" />
            </PageLinkDisabled>
        );
    }

    // if startIndex is not 0, then render the first page followed by ellipsis, if needed.
    if (startIndex > 0) {
        pageLinks.push(
            <PageLink key="0" pageIndex={0} baseUrlPath={baseUrlPath}>
                1
            </PageLink>
        );
        if (startIndex > 1) {
            pageLinks.push(<Ellipsis key="beforeEllipsis" />);
        }
    }

    // render all pages between startIndex and endIndex, the current page should be disabled
    for (let i = startIndex; i <= endIndex; i++) {
        if (pageIndex === i) {
            pageLinks.push(<PageLinkDisabled key={i}>{i + 1}</PageLinkDisabled>);
        } else {
            pageLinks.push(
                <PageLink key={i} pageIndex={i} baseUrlPath={baseUrlPath}>
                    {i + 1}
                </PageLink>
            );
        }
    }

    // if endIndex is not the last page, then render the last page preceded by ellipsis, if needed.
    if (endIndex < numOfPages - 1) {
        if (endIndex < numOfPages - 2) {
            pageLinks.push(<Ellipsis key="afterEllipsis" />);
        }
        pageLinks.push(
            <PageLink key={numOfPages - 1} pageIndex={numOfPages - 1} baseUrlPath={baseUrlPath}>
                {numOfPages}
            </PageLink>
        );
    }

    // renders next "→" button, if the current page is the last page, the button is disabled
    if (pageIndex < numOfPages - 1) {
        pageLinks.push(
            <PageLink key="next" pageIndex={pageIndex + 1} baseUrlPath={baseUrlPath}>
                <ChevronRightIcon className="fill-current h-6 w-6" />
            </PageLink>
        );
    } else {
        pageLinks.push(
            <PageLinkDisabled key="next">
                <ChevronRightIcon className="fill-current h-6 w-6" />
            </PageLinkDisabled>
        );
    }

    return <div className={classNames('flex flex-row flex-wrap items-center gap-2 mt-12 sm:mt-20')}>{pageLinks}</div>;
}

function PageLink({ pageIndex, baseUrlPath, children }) {
    return (
        <Link href={urlPathForPageAtIndex(pageIndex, baseUrlPath)} className="sb-component-button sb-component-button-secondary shrink-0 text-sm p-0 w-10 h-10">
            {children}
        </Link>
    );
}

function PageLinkDisabled({ children }) {
    return (
        <span key="next" className="sb-component-button sb-component-button-secondary opacity-25 shrink-0 text-sm p-0 w-10 h-10 pointer-events-none">
            {children}
        </span>
    );
}

function Ellipsis() {
    return <span className="text-2xl p-1">&hellip;</span>;
}

function urlPathForPageAtIndex(pageIndex, baseUrlPath) {
    return pageIndex === 0 ? baseUrlPath : `${baseUrlPath}/page/${pageIndex + 1}`;
}

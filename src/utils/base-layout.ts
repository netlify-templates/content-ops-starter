import DefaultBaseLayout from '../components/layouts/DefaultBaseLayout';
import BlankBaseLayout from '../components/layouts/BlankBaseLayout';

export function getBaseLayoutComponent(pageBaseLayout, siteConfigBaseLayout) {
    const layout = pageBaseLayout || siteConfigBaseLayout || 'DefaultBaseLayout';
    let BaseLayout;
    if (layout === 'DefaultBaseLayout') {
        BaseLayout = DefaultBaseLayout;
    } else if (layout === 'BlankBaseLayout') {
        BaseLayout = BlankBaseLayout;
    } else {
        BaseLayout = DefaultBaseLayout;
    }
    if (!BaseLayout) {
        throw new Error(`no BaseLayout: ${pageBaseLayout} or ${siteConfigBaseLayout}`);
    }
    return BaseLayout;
}

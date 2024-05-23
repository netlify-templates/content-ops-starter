import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function VideoBlock(props) {
    const { elementId, className, url, aspectRatio = '16:9', styles = {}, ...rest } = props;
    if (!url) {
        return null;
    }
    const fieldPath = props['data-sb-field-path'];
    const annotations = fieldPath ? { 'data-sb-field-path': [fieldPath, `${fieldPath}.elementId#@id`].join(' ').trim() } : {};

    return (
        <div
            id={elementId}
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-video-block',
                'w-full',
                className,
                styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : undefined,
                styles?.self?.margin ? mapStyles({ margin: styles?.self?.margin }) : undefined,
                styles?.self?.borderWidth && styles?.self?.borderWidth !== 0 && styles?.self?.borderStyle !== 'none'
                    ? mapStyles({
                          borderWidth: styles?.self?.borderWidth,
                          borderStyle: styles?.self?.borderStyle,
                          borderColor: styles?.self?.borderColor ?? 'border-primary'
                      })
                    : undefined,
                styles?.self?.borderRadius ? mapStyles({ borderRadius: styles?.self?.borderRadius }) : undefined
            )}
            {...annotations}
        >
            <div
                className={classNames(
                    styles?.self?.borderRadius ? mapStyles({ borderRadius: styles?.self?.borderRadius }) : undefined,
                    'overflow-hidden',
                    'relative',
                    'w-full',
                    'h-0',
                    {
                        'pt-3/4': aspectRatio === '4:3',
                        'pt-9/16': aspectRatio === '16:9'
                    }
                )}
            >
                <VideoComponent url={url} {...rest} hasAnnotations={!!fieldPath} />
            </div>
        </div>
    );
}

function VideoComponent(props) {
    const { url, ...rest } = props;
    const videoData = getVideoData(url);
    if (!videoData.id || !videoData.service) {
        return <p className="absolute italic left-0 text-center top-1/2 -translate-y-1/2 w-full">Video URL is not supported.</p>;
    }
    switch (videoData.service) {
        case 'youtube':
            return <YouTubeVideo id={videoData.id} {...rest} />;
        case 'vimeo':
            return <VimeoVideo id={videoData.id} {...rest} />;
        case 'custom':
            return <SelfHostedVideo url={url} id={videoData.id} {...rest} />;
        default:
            return null;
    }
}

function YouTubeVideo({ id, autoplay, loop, muted, controls = true, hasAnnotations }) {
    const paramsObj: any = {};
    paramsObj.autoplay = autoplay ? '1' : '0';
    paramsObj.controls = controls ? '1' : '0';
    paramsObj.loop = loop ? '1' : '0';
    paramsObj.mute = muted ? '1' : '0';
    paramsObj.rel = '0';
    const queryParams = new URLSearchParams(paramsObj).toString();
    return (
        <iframe
            src={`https://www.youtube.com/embed/${id}?${queryParams}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            {...(hasAnnotations && { 'data-sb-field-path': '.url#@src' })}
            className="absolute left-0 top-0 h-full w-full"
        ></iframe>
    );
}

function VimeoVideo({ id, autoplay, loop, muted, controls = true, hasAnnotations }) {
    const paramsObj: any = {};
    paramsObj.autoplay = autoplay ? '1' : '0';
    paramsObj.controls = controls ? '1' : '0';
    paramsObj.loop = loop ? '1' : '0';
    paramsObj.muted = muted ? '1' : '0';
    paramsObj.transparent = '0';
    const queryParams = new URLSearchParams(paramsObj).toString();
    return (
        <iframe
            src={`https://player.vimeo.com/video/${id}?${queryParams}`}
            title="Vimeo video player"
            frameBorder="0"
            allowFullScreen
            {...(hasAnnotations && { 'data-sb-field-path': '.url#@src' })}
            className="absolute left-0 top-0 h-full w-full"
        ></iframe>
    );
}

function SelfHostedVideo({ url, id, poster, autoplay, loop, muted, controls = true, hasAnnotations }) {
    return (
        <video
            {...(autoplay && { autoPlay: true })}
            {...(loop && { loop: true })}
            {...(muted && { muted: true })}
            {...(controls && { controls: true })}
            {...(poster && { poster: poster })}
            playsInline
            className="absolute left-0 top-0 h-full w-full"
        >
            <source src={url} type={id} {...(hasAnnotations && { 'data-sb-field-path': '.url#@src' })} />
        </video>
    );
}

// Based on https://github.com/radiovisual/get-video-id
function getVideoData(videoUrl: string) {
    let videoData: any = {
        id: null,
        service: null
    };

    if (/youtube|youtu\.be|y2u\.be|i.ytimg\./.test(videoUrl)) {
        videoUrl = videoUrl.replace('/www.', '/');
        videoUrl = videoUrl.replace('-nocookie', '');
        videoData = {
            id: getYoutubeId(videoUrl),
            service: 'youtube'
        };
    } else if (/vimeo/.test(videoUrl)) {
        videoUrl = videoUrl.replace('/www.', '/');
        videoData = {
            id: getVimeoId(videoUrl),
            service: 'vimeo'
        };
    } else if (/\.mp4/.test(videoUrl)) {
        videoData = {
            id: 'video/mp4',
            service: 'custom'
        };
    } else if (/\.webm/.test(videoUrl)) {
        videoData = {
            id: 'video/webm',
            service: 'custom'
        };
    }
    return videoData;
}

function getVimeoId(vimeoStr: string) {
    let str = vimeoStr;

    if (str.includes('#')) {
        [str] = str.split('#');
    }

    if (str.includes('?') && !str.includes('clip_id=')) {
        [str] = str.split('?');
    }

    let id;
    let array;

    const event = /https?:\/\/vimeo\.com\/event\/(\d+)$/;

    const eventMatches = event.exec(str);

    if (eventMatches && eventMatches[1]) {
        return eventMatches[1];
    }

    const primary = /https?:\/\/vimeo\.com\/(\d+)/;

    const matches = primary.exec(str);
    if (matches && matches[1]) {
        return matches[1];
    }

    const vimeoPipe = ['https?://player.vimeo.com/video/[0-9]+$', 'https?://vimeo.com/channels', 'groups', 'album'].join('|');

    const vimeoRegex = new RegExp(vimeoPipe, 'gim');

    if (vimeoRegex.test(str)) {
        array = str.split('/');
        if (array && array.length > 0) {
            id = array.pop();
        }
    } else if (/clip_id=/gim.test(str)) {
        array = str.split('clip_id=');
        if (array && array.length > 0) {
            [id] = array[1].split('&');
        }
    }

    return id;
}

function getYoutubeId(youtubeStr: string) {
    let str = youtubeStr;

    // Remove time hash at the end of the string
    str = str.replace(/#t=.*$/, '');

    // Strip the leading protocol
    str = str.replace(/^https?:\/\//, '');

    // Shortcode
    const shortcode = /youtube:\/\/|youtu\.be\/|y2u\.be\//g;

    if (shortcode.test(str)) {
        const shortcodeid = str.split(shortcode)[1];
        return stripParameters(shortcodeid);
    }

    // /v/ or /vi/
    const inlinev = /\/v\/|\/vi\//g;

    if (inlinev.test(str)) {
        const inlineid = str.split(inlinev)[1];
        return stripParameters(inlineid);
    }

    // V= or vi=
    const parameterv = /v=|vi=/g;

    if (parameterv.test(str)) {
        const array = str.split(parameterv);
        return stripParameters(array[1].split('&')[0]);
    }

    // Format an_webp
    const parameterwebp = /\/an_webp\//g;

    if (parameterwebp.test(str)) {
        const webp = str.split(parameterwebp)[1];
        return stripParameters(webp);
    }

    // /e/
    const eformat = /\/e\//g;

    if (eformat.test(str)) {
        const estring = str.split(eformat)[1];
        return stripParameters(estring);
    }

    // Embed
    const embedreg = /\/embed\//g;

    if (embedreg.test(str)) {
        const embedid = str.split(embedreg)[1];
        return stripParameters(embedid);
    }

    // ignore /user/username pattern
    const usernamereg = /\/user\/([a-zA-Z\d]*)$/g;

    if (usernamereg.test(str)) {
        return undefined;
    }

    // User
    const userreg = /\/user\/(?!.*videos)/g;

    if (userreg.test(str)) {
        const elements = str.split('/');
        return stripParameters(elements.pop()!);
    }

    // Attribution_link
    const attrreg = /\/attribution_link\?.*v%3D([^%&]*)(%26|&|$)/;

    if (attrreg.test(str)) {
        return stripParameters(str.match(attrreg)![1]);
    }

    return undefined;
}

function stripParameters(shortcodeString: string) {
    // Split parameters or split folder separator
    if (shortcodeString.includes('?')) {
        return shortcodeString.split('?')[0];
    }

    if (shortcodeString.includes('/')) {
        return shortcodeString.split('/')[0];
    }

    if (shortcodeString.includes('&')) {
        return shortcodeString.split('&')[0];
    }

    return shortcodeString;
}

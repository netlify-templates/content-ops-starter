const TAILWIND_MAP = {
    alignItems: {
        'flex-start': 'items-start',
        'flex-end': 'items-end',
        center: 'items-center'
    },
    backgroundPosition: {
        bottom: 'bg-bottom',
        center: 'bg-center',
        left: 'bg-left',
        'left-bottom': 'bg-left-bottom',
        'left-top': 'bg-left-top',
        right: 'bg-right',
        'right-bottom': 'bg-right-bottom',
        'right-top': 'bg-right-top',
        top: 'bg-top'
    },
    backgroundRepeat: {
        repeat: 'bg-repeat',
        'repeat-x': 'bg-repeat-x',
        'repeat-y': 'bg-repeat-y',
        'no-repeat': 'bg-no-repeat'
    },
    backgroundSize: {
        auto: 'bg-auto',
        cover: 'bg-cover',
        contain: 'bg-contain'
    },
    borderRadius: {
        none: 'rounded-none',
        'xx-small': 'rounded-sm',
        'x-small': 'rounded',
        small: 'rounded-md',
        medium: 'rounded-lg',
        large: 'rounded-xl',
        'x-large': 'rounded-2xl',
        'xx-large': 'rounded-3xl',
        full: 'rounded-full'
    },
    borderStyle: {
        none: 'border-none',
        solid: 'border-solid',
        dashed: 'border-dashed',
        dotted: 'border-dotted',
        double: 'border-double'
    },
    borderWidth: {
        0: 'border-0',
        1: 'border',
        2: 'border-2',
        4: 'border-4',
        8: 'border-8'
    },
    boxShadow: {
        none: 'shadow-none',
        'x-small': 'shadow-sm',
        small: 'shadow',
        medium: 'shadow-md',
        large: 'shadow-lg',
        'x-large': 'shadow-xl',
        'xx-large': 'shadow-2xl',
        inner: 'shadow-inner'
    },
    fontSize: {
        'x-small': 'text-xs',
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
        'x-large': 'text-xl',
        'xx-large': 'text-2xl',
        'xxx-large': 'text-3xl'
    },
    fontStyle: {
        italic: 'italic'
    },
    fontWeight: {
        100: 'font-thin',
        200: 'font-extralight',
        300: 'font-light',
        400: 'font-normal',
        500: 'font-medium',
        600: 'font-semibold',
        700: 'font-bold',
        800: 'font-extrabold'
    },
    justifyContent: {
        'flex-start': 'justify-start',
        'flex-end': 'justify-end',
        center: 'justify-center'
    },
    margin: function (value) {
        // for tailwind margins - ['twt0:16', 'twb0:16'], the value will be array ['mt-0', 'mb-4']
        if (Array.isArray(value)) {
            return value.join(' ');
        }
        // for regular margins - ['x0:8', 'y0:16'], the value will be object: { left: 4, top: 10 }
        if (typeof value === 'object' && value !== null) {
            const classNames = [];
            Object.entries(value).forEach(([styleProp, styleValue]) => {
                const twValue = styleValue === 1 ? 'px' : String(Number(styleValue) / 4);
                if (styleProp === 'top') {
                    classNames.push(`mt-${twValue}`);
                } else if (styleProp === 'bottom') {
                    classNames.push(`mb-${twValue}`);
                } else if (styleProp === 'left') {
                    classNames.push(`ml-${twValue}`);
                } else if (styleProp === 'right') {
                    classNames.push(`mr-${twValue}`);
                }
            });
            return classNames.join(' ');
        }
        // this object can not be converted into classes and needs to be handled differently
        console.warn('cannot convert "margin" style field value to class name');
        return '';
    },
    padding: function (value) {
        // for tailwind paddings - ['twt0:16', 'twb0:16'], the value will be array ['pt-0', 'pb-4']
        if (Array.isArray(value)) {
            return value.join(' ');
        }
        // for regular paddings - ['x0:8', 'y0:16'], the value will be object: { left: 4, top: 10 }
        if (typeof value === 'object' && value !== null) {
            const classNames = [];
            Object.entries(value).forEach(([styleProp, styleValue]) => {
                const twValue = styleValue === 1 ? 'px' : String(Number(styleValue) / 4);
                if (styleProp === 'top') {
                    classNames.push(`pt-${twValue}`);
                } else if (styleProp === 'bottom') {
                    classNames.push(`pb-${twValue}`);
                } else if (styleProp === 'left') {
                    classNames.push(`pl-${twValue}`);
                } else if (styleProp === 'right') {
                    classNames.push(`pr-${twValue}`);
                }
            });
            return classNames.join(' ');
        }
        // this object can not be converted into classes and needs to be handled differently
        console.warn('cannot convert "padding" style field value to class name');
        return '';
    },
    textAlign: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify'
    },
    textDecoration: {
        underline: 'underline',
        'line-through': 'line-through',
        'underline line-through': 'underline-line-through'
    }
};

export function mapStylesToClassNames(styles: Record<string, any>) {
    return Object.entries(styles)
        .map(([prop, value]) => {
            if (prop in TAILWIND_MAP) {
                if (typeof TAILWIND_MAP[prop] === 'function') {
                    return TAILWIND_MAP[prop](value);
                } else if (value in TAILWIND_MAP[prop]) {
                    return TAILWIND_MAP[prop][value];
                }
            } else {
                // if prop or value don't exist in the map, use the value as is,
                // useful for direct color values.
                return value;
            }
        })
        .join(' ');
}

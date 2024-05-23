/*
Based on https://github.com/etler/marked-plaintext (Plain text renderer for Marked) by Tim Etler, ISC license.
Converted to ES class & added missing checkbox() function (which does nothing, but needs to be there...).
*/
export default class PlainTextRenderer {
    constructor(options) {
        this.options = options || {};
        this.whitespaceDelimiter = this.options.spaces ? ' ' : '\n';
    }

    code(code, infostring, escaped) {
        return this.whitespaceDelimiter + this.whitespaceDelimiter + code + this.whitespaceDelimiter + this.whitespaceDelimiter;
    }

    blockquote(quote) {
        return '\t' + quote + this.whitespaceDelimiter;
    }

    html(html) {
        return html;
    }

    heading(text, level, raw, slugger) {
        return text;
    }

    hr() {
        return this.whitespaceDelimiter + this.whitespaceDelimiter;
    }

    list(body, ordered, start) {
        return body;
    }

    listitem(text) {
        return '\t' + text + this.whitespaceDelimiter;
    }

    checkbox(checked) {
        return '';
    }

    paragraph(text) {
        return this.whitespaceDelimiter + text + this.whitespaceDelimiter;
    }

    table(header, body) {
        return this.whitespaceDelimiter + header + this.whitespaceDelimiter + body + this.whitespaceDelimiter;
    }

    tablerow(content) {
        return content + this.whitespaceDelimiter;
    }

    tablecell(content, flags) {
        return content + '\t';
    }

    // span level renderer
    strong(text) {
        return text;
    }

    em(text) {
        return text;
    }

    codespan(text) {
        return text;
    }

    br() {
        return this.whitespaceDelimiter + this.whitespaceDelimiter;
    }

    del(text) {
        return text;
    }

    link(href, title, text) {
        return text;
    }

    image(href, title, text) {
        return this.showImageText ? text : '';
    }

    text(text) {
        return text;
    }
}

export function replaceASymbol(str) {
    if (str === null || str === undefined) {
        return str;
    }

    return str.replace(/\ba[^a\s]*a\b/g, '!');
}
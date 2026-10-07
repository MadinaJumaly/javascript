export function isValidEmail(str) {
    if (str === null || str === undefined) {
        return false;
    }
    const localPart = "[A-Za-z0-9!#$%&'*+\\-/=?^_`{|}~]+(?:\\.[A-Za-z0-9!#$%&'*+\\-/=?^_`{|}~]+)*";
    const domainLabel = "[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]";
    const emailRegex = new RegExp(`^${localPart}@${domainLabel}(?:\\.${domainLabel})+$`);
    return emailRegex.test(str);
}
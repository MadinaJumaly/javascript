export function isValidPhoneNumber(str) {
    if (str === null || str === undefined) {
        return false;
    }
    return /^\d{3}-\d{3}-\d{4}$/.test(str);
}
export function crossSiteScripting(userInput) {
    document.getElementById("output").textContent = userInput;
}


export function remoteCodeExecution(userInput) {
    const fn = new Function(userInput);
    fn();
}


export function SQLInjection(userInput) {
    if ((typeof userInput === "number" && Number.isFinite(userInput)) || (typeof userInput === "string" && /^\d+$/.test(userInput))) {
    
        return "SELECT * FROM users WHERE id = " + userInput;
    }
    return null;
}


export async function safeRequest() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'deny',
        'X-XSS-Protection': '1; mode=block',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    };

    return await fetch(url, {
        method: 'POST',
        headers: headers,
    });
}

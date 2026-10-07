export function formatter(num, symbol) {
    return `${num}${symbol}`;
}

export function generateGreetUserMessage(user) {
    if (!user) {
        return null;
    }

    if (user.isLoggedIn && user.age > 18) {
        return `Hello, ${user.name}! Thank you, for your purchase!`;
    }

    return 'Thank you, stranger!';
}
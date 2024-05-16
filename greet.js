

function greet(name) {
    if (name === null) {
        return "Hello there!";
    } else if (typeof name === 'string') {
        if (name === name.toUpperCase()) {
            return `HELLO ${name}!`;
        } else {
            return `Hello, ${name}`;
        }
    } else if (Array.isArray(name)) {
        let names = name.join(', ');
        return `Hello, ${names}`;
    } else {
        return "Invalid input";
    }
}

export default greet;
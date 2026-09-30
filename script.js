const greetUser = (firstName, lastName, timeOfDay) => {
    const fullName = `${firstName} ${lastName}`;
    const greetingMessage = timeOfDay === "morning" ? "Good morning!" :
        timeOfDay === "afternoon" ? "Good afternoon!" :
            timeOfDay === "evening" ? "Good evening!" :
                `Hello!`;
    return `${greetingMessage} ${fullName}`;
}

console.log(greetUser("john", "marstin", "morning"));
console.log(greetUser("john", "marstin", "afternoon"));
console.log(greetUser("john", "marstin", "evening"));
console.log(greetUser("john", "marstin", ""));

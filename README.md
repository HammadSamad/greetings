# greetings

# User Greeting Function

A simple JavaScript program that demonstrates how to create a reusable greeting function using **arrow functions**, **template literals**, and **conditional (ternary) operators**.

## 📌 Description

The `greetUser()` function accepts a user's first name, last name, and time of day. It generates a personalized greeting based on the provided time.

Supported time-of-day values:

* `morning` → Good morning!
* `afternoon` → Good afternoon!
* `evening` → Good evening!
* Any other value → Hello!

## 🔗 Project URL

[View Project on GitHub](https://github.com/HammadSamad/greetings/tree/main)

## 🛠️ Technologies Used

* JavaScript
* Arrow Functions
* Template Literals
* Ternary Operators
* `console.log()`

## 📂 Code

```javascript
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
```

## ▶️ How to Run

### 1. Save the file

Save the JavaScript code as:

```text
greeting.js
```

### 2. Run using Node.js

Open a terminal in the project directory and run:

```bash
node greeting.js
```

You can also run it directly in a browser's developer console.

## 📤 Expected Output

```text
Good morning! john marstin
Good afternoon! john marstin
Good evening! john marstin
Hello! john marstin
```

## 🔍 How It Works

The function:

```javascript
greetUser(firstName, lastName, timeOfDay)
```

takes three parameters:

| Parameter   | Description       | Example   |
| ----------- | ----------------- | --------- |
| `firstName` | User's first name | `john`    |
| `lastName`  | User's last name  | `marstin` |
| `timeOfDay` | Time period       | `morning` |

The user's full name is created using a template literal:

```javascript
const fullName = `${firstName} ${lastName}`;
```

The greeting is selected using nested ternary operators:

```javascript
const greetingMessage = timeOfDay === "morning" ? "Good morning!" :
    timeOfDay === "afternoon" ? "Good afternoon!" :
        timeOfDay === "evening" ? "Good evening!" :
            `Hello!`;
```

Finally, the function returns the greeting along with the user's full name.

## 📚 Concepts Demonstrated

### Arrow Function

```javascript
const greetUser = (...) => {
    // function body
}
```

### Template Literals

```javascript
`${firstName} ${lastName}`
```

Template literals allow variables to be embedded directly inside strings.

### Ternary Operator

The ternary operator provides a concise way to choose between different values based on a condition.

```javascript
condition ? valueIfTrue : valueIfFalse;
```

### Function Reusability

The same function can be called multiple times with different values:

```javascript
greetUser("john", "marstin", "morning");
greetUser("john", "marstin", "afternoon");
```

## 📄 License

This project is created for learning and educational purposes.


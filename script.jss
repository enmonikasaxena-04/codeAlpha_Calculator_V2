const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "AC") {
            expression = "";
            display.value = "";
        }
        else if (value === "DEL") {
            expression = expression.slice(0, -1);
            display.value = expression;
        }
        else if (value === "=") {
            try {
                expression = eval(expression).toString();
                display.value = expression;
            } catch {
                display.value = "Error";
                expression = "";
            }
        }
        else {
            expression += value;
            display.value = expression;
        }
    });
});

document.addEventListener("keydown", (e) => {
    const key = e.key;

    if ("0123456789+-*/.%".includes(key)) {
        expression += key;
        display.value = expression;
    }
    else if (key === "Enter") {
        e.preventDefault();
        try {
            expression = eval(expression).toString();
            display.value = expression;
        } catch {
            display.value = "Error";
            expression = "";
        }
    }
    else if (key === "Backspace") {
        expression = expression.slice(0, -1);
        display.value = expression;
    }
    else if (key === "Escape") {
        expression = "";
        display.value = "";
    }
});
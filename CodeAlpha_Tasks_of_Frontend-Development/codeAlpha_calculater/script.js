const display = document.getElementById("display");

// Add values to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {

    try {
        display.value = eval(display.value);
    }

    catch {
        display.value = "Error";
    }
}document.addEventListener("keydown", function(event) {

    const key = event.key;

    // Numbers and operators
    if (
        (key >= '0' && key <= '9') ||
        key === '+' ||
        key === '-' ||
        key === '*' ||
        key === '/' ||
        key === '.'
    ) {
        appendValue(key);
    }

    // Enter key
    else if (key === "Enter") {
        calculate();
    }

    // Backspace
    else if (key === "Backspace") {
        deleteLast();
    }

    // Escape key
    else if (key === "Escape") {
        clearDisplay();
    }

});
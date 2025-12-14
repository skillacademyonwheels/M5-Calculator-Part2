let expression = ""; // stores the full string like "12+7*3"

function appendValue(val) {
    // Avoid starting with operators (except minus)
    if (expression === "" && "+*/%".includes(val)) return;

    // Avoid two operators in a row
    const last = expression.slice(-1);
    const ops = "+-*/%";
    if (ops.includes(last) && ops.includes(val)) {
        // replace last operator with new one
        expression = expression.slice(0, -1) + val;
    } else {
        expression += val;
    }

    document.getElementById("display").value = expression;
}

function clearAll() {
    expression = "";
    document.getElementById("display").value = "";
}

function backspace() {
    expression = expression.slice(0, -1);
    document.getElementById("display").value = expression;
}

function calculate() {
    if (!expression) return;

    // don't evaluate if expression ends with operator
    const last = expression.slice(-1);
    if ("+-*/%".includes(last)) expression = expression.slice(0, -1);

    try {
        // Simple evaluation (string expression)
        const result = eval(expression);
        expression = String(result);
        document.getElementById("display").value = expression;
    } catch (err) {
        document.getElementById("display").value = "Error";
        expression = "";
    }
}
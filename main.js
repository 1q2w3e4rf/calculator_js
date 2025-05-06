let screen = document.getElementById('screen');

function addToScreen(value) {
    if (value === '.') {
        const currentValue = screen.value;
        const lastNumber = currentValue.split(/[\+\-\*\/\(\)]/).pop();

        if (lastNumber.includes('.')) {
            return;
        }

        if (lastNumber === '') {
            screen.value += '0.';
            return;
        }
    }

    screen.value += value;
}

function zeroScreen() {
    screen.value = '';
}

function del() {
    screen.value = screen.value.slice(0, -1);
}

function calculations() {
    try {
        let rek = {
            name:"rek",
            age:15
        };
        const expr = screen.value;
        let balance = 0;

        for (let char of expr) {
            if (char === '(') balance++;
            if (char === ')') balance--;
            if (balance < 0) throw new Error("Error");
        }

        if (balance !== 0) throw new Error("Error");
        let result = eval(screen.value);
        result = Math.round(result * 10000000000) / 10000000000;
        screen.value = result;
    } catch (e) {
        screen.value = 'Error';
        setTimeout(clearScreen, 1000);
    }
}
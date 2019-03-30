function getNumber(num) {
    let input = document.getElementById("output");
    switch (num) {
        case 7:
            input.value += '7';
            break;
        case 8:
            input.value += '8';
            break;
        case 9:
            input.value += '9';
            break;
        case 4:
            input.value += '4';
            break;
        case 5:
            input.value += '5';
            break;
        case 6:
            input.value += '6';
            break;
        case 1:
            input.value += '1';
            break;
        case 2:
            input.value += '2';
            break;
        case 3:
            input.value += '3';
            break;
        case 0:
            input.value += '0';
            break;
    }
}
function getOpered(operated) {
    let input = document.getElementById("output");
    switch (operated) {
        case '+':
            input.value += '+';
            break;
        case '-':
            input.value += '-';
            break;
        case '*':
            input.value += '*';

            break;
        case '/':
            input.value += '/';

            break;
        case '%':
            input.value += '%';
            break;
        case '.':
            input.value += '.';
            break;

    }
}
function cler() {
    document.getElementById("output").value = "";
}
function back() {
    let input = document.getElementById("output");
    let x = input.value;
    if (x.length > 0) {
        x = x.substring(0, x.length - 1);
        input.value = x;
    }

}
function getanswer() {
    let input = document.getElementById("output");
    answor = eval(input.value);
    input.value = answor;
}

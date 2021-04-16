var validCodes =
    [13
        , 99
        , 42, 43, 45, 47
        , 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58];

var value = "";

$(document).ready(function () {

    $(".input").keypress(function (e) {

        var code = e.which;
        var digit = String.fromCharCode(code);

        if (digit.toUpperCase() === 'C') return clear();

        if (isValid(code) === -1) {
            return error("digit ERROR");
        }

        if (code === 13) return calculate(value);

        value = getInputValue() + digit;

    });

    $("button").click(function () {

        var char = $(this).text();

        if (char === "C") return clear();
        if (char === "=") return calculate(value);

        value = getInputValue() + char;
        setInputValue(char);

    });

});

function isValid(code) {
    return validCodes.findIndex(c => c == code);
}

function clear() {
    return setTimeout(() => { $(".input").val("") }, 800);
}

function error(message) {
    $(".input").val(message);
    return clear();
}

function calculate(value) {
    try {
        return $(".input").val(eval(value));
    } catch (e) {
        if (e instanceof SyntaxError) {
            return error("syntax ERROR");
        }
    }
}

function getInputValue() {
    return $(".input").val();
}

function setInputValue(char) {
    return $(".input").val(getInputValue() + char);
}
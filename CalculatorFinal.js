var onedelete = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var deletereal = [];
var deletedisp = [];
var errormessage = "";
var ifdegree = "0";
var memvar = "";
var currentInputdisp = "";
var currentInputreal = "";
// Helper function for displaying the current input
function displayErrorMessage() {
    document.getElementById('screen2').value = errormessage;
}

function displayCurrentInputdisp() {
    if (currentInputdisp.length >= 75) {
        deleter();
        errormessage = "Too Many Characters";
        displayErrorMessage();
        document.getElementById('screen').value = currentInputdisp;
    }
    else {
        document.getElementById('screen').value = currentInputdisp;
        console.log(currentInputdisp);
        console.log(currentInputreal);
    }
}

function sqrroot() {
    errormessage = "";
    displayErrorMessage();
    if (ldp(currentInputdisp)) {
        errormessage = "Unexpected Period";
        displayErrorMessage();
    }
    else {
        currentInputdisp += "√(";
        deletedisp.push(2);
        currentInputreal += "Math.sqrt(";
        deletereal.push(10);
        displayCurrentInputdisp();
    }
}

function change_ifdegree() {
    if (ifdegree == "0") {
        ifdegree = "1";
    }
    else {
        ifdegree = "0";
    }
}

function ldp(str) {
    if (str.slice(-1) == ".") {
        return true;
    }
    else {
        return false;
    }
}

function ldo(str) {
    if (str.slice(-1) == "+" || str.slice(-1) == "/" || str.slice(-1) == "-" || str.slice(-1) == "*") {
        return true;
    }
    else {
        return false;
    }
}

function ldomultdiv(str) {
    if (str.slice(-1) == "*" || str.slice(-1) == "/") {
        return true;
    }
    else {
        return false;
    }
}

function ldoplusminus(str) {
    if (str.slice(-1) == "+" || str.slice(-1) == "-") {
        return true;
    }
    else {
        return false;
    }
}
// Adds a decimal to the current input
function secondDecimal(str) {
    var chk = "0";
    for (var i = str.length; i >= 0; i--) {
        if (isNaN(str.charAt(i)) === false) {}
        else if (str.charAt(i) == ".") {
            chk = "1";
            break;
        }
        else if (isNaN(str.charAt(i)) === true) {
            break;
        }
    }
    if (chk == "0") {
        return false;
    }
    else if (chk == "1") {
        return true;
    }
}
// Adds a digit to the current input
function addDigit(dig) {
    errormessage = "";
    displayErrorMessage();
    if ((currentInputdisp.slice(-1)) == "!") {
        errormessage = "Can't Put number after factorial";
        displayErrorMessage();
    }
    else {
        currentInputdisp = currentInputdisp + dig;
        deletedisp.push(1);
        currentInputreal = currentInputreal + dig;
        deletereal.push(1);
        displayCurrentInputdisp();
    }
}

function addDecimal() {
    errormessage = "";
    displayErrorMessage();
    if (ldp(currentInputdisp)) {
        errormessage = "there is already a period";
        displayErrorMessage();
    }
    else {
        if (secondDecimal(currentInputdisp)) {
            errormessage = "Improper Period Placement";
            displayErrorMessage();
        }
        else {
            currentInputdisp = currentInputdisp + ".";
            deletedisp.push(1);
            currentInputreal = currentInputreal + ".";
            deletereal.push(1);
        }
    }
    displayCurrentInputdisp();
}

function m_plus() {
    errormessage = "";
    displayErrorMessage();
    if ((isNaN(eval(currentInputreal))) === true) {
        errormessage = "Non a complete function";
        displayErrorMessage();
    }
    if (ldo(currentInputdisp)) {
        errormessage = "Can't end in operator";
        displayErrorMessage();
    }
    else {
        if (ldp(currentInputdisp)) {
            errormessage = "can't end in period";
            displayErrorMessage();
        }
        else if (memvar === "") {
            memvar = "0";
            var initial_memvar = parseFloat(memvar);
            var current_Input = (eval(currentInputreal));
            var calc = initial_memvar + current_Input;
            memvar = calc.toString();
        }
        else {
            var initial_memvar = parseFloat(memvar);
            var current_Input = (eval(currentInputreal));
            var calc = initial_memvar + current_Input;
            memvar = calc.toString();
        }
    }
}

function m_minus() {
    errormessage = "";
    displayErrorMessage();
    if ((isNaN(eval(currentInputreal))) === true) {
        errormessage = "Non a complete function";
        displayErrorMessage();
    }
    else {
        if (ldo(currentInputdisp)) {
            errormessage = "Can't end in operator";
            displayErrorMessage();
        }
        else {
            if (ldp(currentInputdisp)) {
                errormessage = "can't end in period";
                displayErrorMessage();
            }
            else {
                var initial_memvar = parseFloat(memvar);
                var current_Input = (eval(currentInputreal));
                var calc = initial_memvar - current_Input;
                memvar = calc.toString();
            }
        }
    }
}

function m_reference() {
    errormessage = "";
    displayErrorMessage();
    currentInputdisp += memvar;
    deletedisp.push((memvar.length));
    currentInputreal += memvar;
    deletereal.push((memvar.length));
    displayCurrentInputdisp();
}
// Clears everything.
function allClear() {
    errormessage = "";
    displayErrorMessage();
    memvar = "0";
    currentInputdisp = "";
    currentInputreal = "";
    deletedisp = [];
    deletereal = [];
    displayCurrentInputdisp();
}

function m_clear() {
    errormessage = "";
    displayErrorMessage();
    memvar = "0";
}

function InputClear() {
    errormessage = "";
    displayErrorMessage();
    currentInputdisp = "";
    currentInputreal = "";
    deletedisp = [];
    deletereal = [];
    displayCurrentInputdisp();
}

function mult_or_div(op) {
    var truth = false;
    if (op == "/" || op == "*") {
        if (currentInputdisp.charAt((currentInputdisp.length) - 1) == "+" || currentInputdisp.charAt((currentInputdisp.length) - 1) == "-") {
            truth = true;
        }
    }
    return truth;
}
// Stores the last operator pushed for multiply, divide, add, or subtract.
function addOperator(op) {
    errormessage = "";
    displayErrorMessage();
    if (ldomultdiv(currentInputdisp) === true || mult_or_div(op) === true) {
        errormessage = "Can't end with Operator";
        displayErrorMessage();
    }
    else {
        if (ldp(currentInputdisp)) {
            errormessage = "Can't end with Period";
            displayErrorMessage();
        }
        else if (ldoplusminus(currentInputdisp.slice(-1)) === true && ldoplusminus(currentInputdisp.slice(-2, -1)) === true) {
            errormessage = "Too many operators";
            displayErrorMessage();
        }
        else {
            currentInputdisp = currentInputdisp + op;
            deletedisp.push(1);
            currentInputreal = currentInputreal + op;
            deletereal.push(1);
        }
        displayCurrentInputdisp();
    }
}
// Calculate using operator, the memory and what is current
function calculate() {
    errormessage = "";
    displayErrorMessage();
    if (isNaN(eval(currentInputreal)) === true) {
        errormessage = "Not a Real Number";
        displayErrorMessage();
    }
    else {
        if (ldo(currentInputdisp)) {
            errormessage = "Can't end with Operator";
            displayErrorMessage();
        }
        else {
            if (ldp(currentInputdisp)) {
                errormessage = "Can't end with Period";
                displayErrorMessage();
            }
            else {
                var calc = (eval(currentInputreal));
                calc = calc.toString();
                if (calc == "Infinity") {
                    errormessage = "Can't divide by zero";
                    displayErrorMessage();
                }
                else {
                    deletedisp = onedelete;
                    var evaluation = (Math.round(eval(currentInputreal) * 1000000)) / 1000000;
                    currentInputdisp = evaluation.toString();
                    deletedisp = [];
                    currentInputreal = evaluation.toString();
                    deletereal = [];
                }
            }
        }
    }
    displayCurrentInputdisp();
}
// Change the sign of the current input
function changeSign() {
    errormessage = "";
    displayErrorMessage();
    if (ldo(currentInputdisp)) {
        errormessage = "Can't end with an Operator";
        displayErrorMessage();
    }
    else {
        if (ldp(currentInputdisp)) {
            errormessage = "Can't end with Period";
            displayErrorMessage();
        }
        else {
            currentInputdisp = "-(" + currentInputdisp + ")";
            deletedisp.push((3 + currentInputdisp.length));
            currentInputreal = "-(" + currentInputreal + ")";
            deletereal.push((3 + currentInputreal.length));
        }
    }
    displayCurrentInputdisp();
}
// Clear the current input back to 0
function deleter() {
    errormessage = "";
    displayErrorMessage();
    var dispchange = deletedisp.pop();
    var realchange = deletereal.pop();
    currentInputdisp = currentInputdisp.slice(0, -(dispchange));
    currentInputreal = currentInputreal.slice(0, -(realchange));
    displayCurrentInputdisp();
}
// Change the current input to a percentage
function percentage() {
    errormessage = "";
    displayErrorMessage();
    if ((isNaN(eval(currentInputreal))) === true) {
        errormessage = "Not a complete function";
        displayErrorMessage();
    }
    else {
        if (ldo(currentInputdisp)) {
            errormessage = "Can't end with an Operator";
            displayErrorMessage();
        }
        else {
            if (ldp(currentInputdisp)) {
                errormessage = "Can't end with Period";
                displayErrorMessage();
            }
            else {
                var perc = (eval(currentInputreal)) * 0.01;
                currentInputdisp = perc.toString();
                deletedisp.push((currentInputdisp.length));
                currentInputreal = perc.toString();
                deletereal.push((currentInputdisp.length));
            }
        }
        displayCurrentInputdisp();
    }
}
// Calculate the inverse of the current input
function inverse() {
    if (ldo(currentInputdisp)) {
        errormessage = "Can't end with an Operator";
        displayErrorMessage();
    }
    else {
        if (ldp(currentInputdisp)) {
            errormessage = "Can't end with Period";
            displayErrorMessage();
        }
        else {
            currentInputdisp = "1/(" + currentInputdisp + ")";
            deletedisp.push((4 + currentInputdisp.length));
            currentInputreal = "1/(" + currentInputreal + ")";
            deletereal.push((4 + currentInputreal.length));
        }
    }
    displayCurrentInputdisp();
}

function square(num) {
    num = num * num;
    return num;
}

function squarebutton() {
    if (ldo(currentInputdisp)) {
        errormessage = "Can't end with an Operator";
        displayErrorMessage();
    }
    else {
        if (ldp(currentInputdisp)) {
            errormessage = "Can't end with Period";
            displayErrorMessage();
        }
        else {
            currentInputdisp = "(" + currentInputdisp + ")^2";
            deletedisp.push((4 + currentInputdisp.length));
            currentInputreal = "square(" + currentInputreal + ")";
            deletereal.push((8 + currentInputreal.length));
        }
    }
    displayCurrentInputdisp();
}

function trigbuttons(trigtype) {
    if (trigtype == 1) {
        currentInputdisp = currentInputdisp + "sin(";
        deletedisp.push(4);
        currentInputreal = currentInputreal + "customsin(";
        deletereal.push(10);
        displayCurrentInputdisp();
    }
    else if (trigtype == 2) {
        currentInputdisp = currentInputdisp + "cos(";
        deletedisp.push(4);
        currentInputreal = currentInputreal + "customcos(";
        deletereal.push(10);
        displayCurrentInputdisp();
    }
    else if (trigtype == 3) {
        currentInputdisp = currentInputdisp + "tan(";
        deletedisp.push(4);
        currentInputreal = currentInputreal + "customtan(";
        deletereal.push(10);
        displayCurrentInputdisp();
    }
    else if (trigtype == 4) {
        currentInputdisp = currentInputdisp + "sec(";
        deletedisp.push(4);
        currentInputreal = currentInputreal + "customsec(";
        deletereal.push(10);
        displayCurrentInputdisp();
    }
    else if (trigtype == 5) {
        currentInputdisp = currentInputdisp + "csc(";
        deletedisp.push(4);
        currentInputreal = currentInputreal + "customcsc(";
        deletereal.push(10);
        displayCurrentInputdisp();
    }
    else if (trigtype == 6) {
        currentInputdisp = currentInputdisp + "cot(";
        deletedisp.push(4);
        currentInputreal = currentInputreal + "customcot(";
        deletereal.push(10);
        displayCurrentInputdisp();
    }
    else if (trigtype == 7) {
        currentInputdisp = currentInputdisp + "arcsin(";
        deletedisp.push(7);
        currentInputreal = currentInputreal + "customarcsin(";
        deletereal.push(13);
        displayCurrentInputdisp();
    }
    else if (trigtype == 8) {
        currentInputdisp = currentInputdisp + "arccos(";
        deletedisp.push(7);
        currentInputreal = currentInputreal + "customarccos(";
        deletereal.push(13);
        displayCurrentInputdisp();
    }
    else if (trigtype == 9) {
        currentInputdisp = currentInputdisp + "arctan(";
        deletedisp.push(7);
        currentInputreal = currentInputreal + "customarctan(";
        deletereal.push(13);
        displayCurrentInputdisp();
    }
    else if (trigtype == 10) {
        currentInputdisp = currentInputdisp + "arcsec(";
        deletedisp.push(7);
        currentInputreal = currentInputreal + "customarcsec(";
        deletereal.push(13);
        displayCurrentInputdisp();
    }
    else if (trigtype == 11) {
        currentInputdisp = currentInputdisp + "arccsc(";
        deletedisp.push(7);
        currentInputreal = currentInputreal + "customarccsc(";
        deletereal.push(13);
        displayCurrentInputdisp();
    }
    else if (trigtype == 12) {
        currentInputdisp = currentInputdisp + "arccot(";
        deletedisp.push(7);
        currentInputreal = currentInputreal + "customarccot(";
        deletereal.push(13);
        displayCurrentInputdisp();
    }
}

function customsin(num) {
    var angle = eval(num);
    if (ifdegree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = Math.sin(angle);
    return solution;
}

function customcos(num) {
    var angle = eval(num);
    if (ifdegree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = Math.cos(angle);
    return solution;
}

function customtan(num) {
    var angle = eval(num);
    if (ifdegree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = Math.tan(angle);
    return solution;
}

function customsec(num) {
    var angle = eval(num);
    if (ifdegree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = 1 / (Math.cos(angle));
    return solution;
}

function customcsc(num) {
    var angle = eval(num);
    if (ifdegree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = 1 / (Math.sin(angle));
    return solution;
}

function customcot(num) {
    var angle = eval(num);
    if (ifdegree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = 1 / (Math.tan(angle));
    return solution;
}

function customarcsin(num) {
    var angle = eval(num);
    if (ifdegree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = Math.asin(angle);
    return solution;
}

function customarccos(num) {
    var angle = eval(num);
    if (ifdegree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = Math.acos(angle);
    return solution;
}

function customarctan(num) {
    var angle = eval(num);
    if (ifdegree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = Math.atan(angle);
    return solution;
}

function customarcsec(num) {
    var angle = eval(num);
    if (ifdegree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = 1 / (Math.acos(angle));
    return solution;
}

function customarccsc(num) {
    var angle = eval(num);
    if (ifdegree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = 1 / (Math.asin(angle));
    return solution;
}

function customarccot(num) {
    var angle = eval(num);
    if (ifdegree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = 1 / (Math.atan(angle));
    return solution;
}

function whichparenthesis(str) {
    var chk = 0;
    for (var i = str.length; i >= 0; i--) {
        if (str.charAt(i) == "(") {
            chk = chk + 1;
        }
        else if (str.charAt(i) == ")") {
            chk = chk - 1;
        }
    }
    if (chk > 0) {
        return false;
    }
    else {
        return true;
    }
}

function parenthesisbackward() {
    if (ldp(currentInputdisp)) {
        errormessage = "Can't end with Period";
        displayErrorMessage();
    }
    else {
        if (ldo(currentInputdisp)) {
            errormessage = "Can't end with an Operator";
            displayErrorMessage();
        }
        else {
            if (whichparenthesis(currentInputdisp) === true) {
                errormessage = "Parenthesis Missalignment";
                displayErrorMessage();
            }
            else {
                currentInputdisp = currentInputdisp + ")";
                deletedisp.push(1);
                currentInputreal = currentInputreal + ")";
                deletereal.push(1);
            }
            displayCurrentInputdisp();
        }
    }
}

function parenthesisforward() {
    if (ldp(currentInputdisp)) {
        errormessage = "Can't end with Period";
        displayErrorMessage();
    }
    else if (isNaN(currentInputdisp.slice(-1)) === false) {
        errormessage = "Operator Needed";
        displayErrorMessage();
    }
    else {
        currentInputdisp = currentInputdisp + "(";
        deletedisp.push(1);
        currentInputreal = currentInputreal + "(";
        deletereal.push(1);
        displayCurrentInputdisp();
    }
}

function toFactorial(num) {
    var Factorial_num = 1;
    for (var i = 1; i <= num; i++) {
        Factorial_num = Factorial_num * i;
    }
    return (Factorial_num).toString();
}
// Calculate the factorial of the current input
function factorial() {
    errormessage = "";
    displayErrorMessage();
    var numberchk = parseFloat(currentInputdisp.slice(-1));
    if ((isNaN(numberchk)) === true) {
        errormessage = "Can't take Factorial of a Non-Number";
        displayErrorMessage();
    }
    else {
        currentInputdisp += "!";
        deletedisp.push(1);
        var numlength = 0;
        for (var i = (currentInputdisp.length - 1); i >= 0; i--) {
            if ((currentInputdisp.charAt(i)) == "!") {}
            else if (isNaN(parseFloat(currentInputdisp.charAt(i))) === false || currentInputdisp.charAt(i) == ".") {
                numlength += 1;
            }
            else if (isNaN(parseFloat(currentInputdisp.charAt(i))) === true) {
                break;
            }
        }
        var num_factorial = parseFloat(currentInputdisp.slice((currentInputdisp.length - 1) - numlength));
        currentInputreal = currentInputreal.slice(0, -(numlength)) + "toFactorial(" + num_factorial + ")";
        deletedisp.push(1 + numlength);
        deletereal.push(13 + numlength);
        displayCurrentInputdisp();
    }
}

function exponents() {
    console.log("called function");
    errormessage = "";
    displayErrorMessage();
    var numberchk = parseFloat(currentInputdisp.slice(-1));
    if (ldo(currentInputdisp) === true || ldp(currentInputdisp) === true) {
        console.log("error");
        errormessage = "Can't take exponent of a Non-Number";
        displayErrorMessage();
    }
    else {
        currentInputdisp += "^(";
        deletedisp.push(2);
        var numlength = 2;
        if (currentInputdisp.slice(-3, -2) == ")") {
            var parenth = 0;
            for (var i = (currentInputdisp.length - 3); i >= 0; i--) {
                if ((currentInputdisp.charAt(i)) === ")") {
                    parenth += 1;
                    numlength += 1;
                    console.log(parenth);
                }
                else if ((currentInputdisp.charAt(i)) === "(") {
                    numlength += 1;
                    parenth -= 1;
                    if (parenth > 0) {
                        console.log(parenth);
                    }
                    else {
                        console.log(parenth);
                        break;
                    }
                }
                else {
                    if (parenth == 0) {
                        console.log(parenth);
                        break;
                    }
                    else {
                        console.log(parenth);
                        numlength += 1;
                    }
                }
            }
            var num_before = currentInputdisp.slice(0, -(numlength));
            currentInputreal = num_before + "Math.pow(" + currentInputdisp.slice(-numlength, -2) + ", ";
            deletedisp.push(numlength);
            deletereal.push(9 + numlength);
            displayCurrentInputdisp();
        }
        else {
            console.log("call 2");
            for (var i = (currentInputdisp.length - 3); i >= 0; i--) {
                if ((currentInputdisp.charAt(i)) === "!" || isNaN(currentInputdisp.charAt(i)) === false || currentInputdisp.charAt(i) == ".") {
                    numlength += 1;
                }
                else if (isNaN(currentInputdisp.charAt(i)) === true) {
                    break;
                }
            }
            console.log(numlength)
            var num_before = currentInputdisp.slice(0, -(numlength));
            console.log(num_before)
            currentInputreal = num_before + "Math.pow(" + currentInputdisp.slice(-numlength, -2) + ", ";
            deletedisp.push(numlength);
            deletereal.push(9 + numlength);
            displayCurrentInputdisp();
        }
    }
}

function pibutton() {
    currentInputdisp += "π";
    deletedisp.push(1);
    currentInputreal += "(Math.PI)";
    deletereal.push(9);
    displayCurrentInputdisp();
}

function ebutton() {
    currentInputdisp += "e";
    deletedisp.push(1);
    currentInputreal += "(Math.E)";
    deletereal.push(8);
    displayCurrentInputdisp();
}
// Calculate the square of the current input

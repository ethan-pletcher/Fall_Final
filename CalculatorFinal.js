var one_delete = [1];
var delete_real = [];
var delete_disp = [];
var errormessage = "";
var if_degree = "0";
var mem_var = "";
var currentInputdisp = "";
var currentInputreal = "";
// Helper function for displaying the current input

/**
 * displays the variable "errormessage"
 */
function displayErrorMessage() {
    document.getElementById('screen2').value = errormessage;
}
/**
 * Displays the variable "currentInputdisp" and prevents a user from typing too many characters
 */
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

/**
 * Checks for errors and then, if none are found, encapsulates the entire current input into a square root. It also updates the deleter fuction with the length of the addition
 */
function sqrroot() {
    errormessage = "";
    displayErrorMessage();
    if (ldp(currentInputdisp)) {
        errormessage = "Unexpected Period";
        displayErrorMessage();
    }
    else {
        currentInputdisp += "√(";
        delete_disp.push(2);
        currentInputreal += "Math.sqrt(";
        delete_real.push(10);
        displayCurrentInputdisp();
    }
}

/**
 * change global variable "ifdegree" between  "0" and "1"
 */
function change_ifdegree() {
    if (if_degree == "0") {
        if_degree = "1";
    }
    else {
        if_degree = "0";
    }
}

/**
 * checks if the last digit of a string is a period
 * @param   {string} str input string
 * @returns {boolean}  whether or not the last digit is a period
 */
function ldp(str) {
    if (str.slice(-1) == ".") {
        return true;
    }
    else {
        return false;
    }
}

/**
 * checks if the last digit of a string is an operator.
 * @param   {string} str input string
 * @returns {boolean}  whether or not the last digit is an operator
 */
function ldo(str) {
    if (str.slice(-1) == "+" || str.slice(-1) == "/" || str.slice(-1) == "-" || str.slice(-1) == "*") {
        return true;
    }
    else {
        return false;
    }
}

/**
 * checks if the last digit of a string is a "*" or a "/".
 * @param   {string} str input string
 * @returns {boolean}  whether or not the last digit is a "*" or a "/".
 */
function ldomultdiv(str) {
    if (str.slice(-1) == "*" || str.slice(-1) == "/") {
        return true;
    }
    else {
        return false;
    }
}

/**
 * checks if the last digit of a string is a "+" or a "-".
 * @param   {string} str input string
 * @returns {boolean}  whether or not the last digit is a "+" or a "-".
 */
function ldoplusminus(str) {
    if (str.slice(-1) == "+" || str.slice(-1) == "-") {
        return true;
    }
    else {
        return false;
    }
}

/**
 * checks whether or not a decimal should be allowed at the end of the input string
 * @param   {string}  str input string
 * @returns {boolean} whether or not a decimal would be an issue
 */
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

/**
 * checks for errors and, if none exist, adds the inputted digit to the end of the strings. It also pushes a one to both the deleter arrays
 * @param {string} dig digit to be added
 */
function addDigit(dig) {
    errormessage = "";
    displayErrorMessage();
    if ((currentInputdisp.slice(-1)) == "!") {
        errormessage = "Can't Put number after factorial";
        displayErrorMessage();
    }
    else {
        currentInputdisp = currentInputdisp + dig;
        delete_disp.push(1);
        currentInputreal = currentInputreal + dig;
        delete_real.push(1);
        displayCurrentInputdisp();
    }
}

/**
 * checks for errors and, if none exist, adds a decimal to the end of the strings. It also pushes a one to both the deleter arrays
 */
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
            delete_disp.push(1);
            currentInputreal = currentInputreal + ".";
            delete_real.push(1);
        }
    }
    displayCurrentInputdisp();
}

/**
 * Adds the current display to a separate global variable that stores it as memory.
 */
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
        else if (mem_var === "") {
            mem_var = "0";
            var initial_memvar = parseFloat(mem_var);
            var current_Input = (eval(currentInputreal));
            var calc = initial_memvar + current_Input;
            mem_var = calc.toString();
        }
        else {
            var initial_memvar = parseFloat(mem_var);
            var current_Input = (eval(currentInputreal));
            var calc = initial_memvar + current_Input;
            mem_var = calc.toString();
        }
    }
}

/**
 * subtracts the current display from a separate global variable that stores it as memory.
 */
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
                var initial_memvar = parseFloat(mem_var);
                var current_Input = (eval(currentInputreal));
                var calc = initial_memvar - current_Input;
                mem_var = calc.toString();
            }
        }
    }
}

/**
 * adds the contents of the stored memory variable to the current display.
 */
function m_reference() {
    errormessage = "";
    displayErrorMessage();
    currentInputdisp += mem_var;
    delete_disp.push((mem_var.length));
    currentInputreal += mem_var;
    delete_real.push((mem_var.length));
    displayCurrentInputdisp();
}

/**
 * clears memory, current input, and real current input.
 */
function allClear() {
    errormessage = "";
    displayErrorMessage();
    mem_var = "0";
    currentInputdisp = "";
    currentInputreal = "";
    delete_disp = [];
    delete_real = [];
    displayCurrentInputdisp();
}

/**
 * clears only memory.
 */
function m_clear() {
    errormessage = "";
    displayErrorMessage();
    mem_var = "0";
}

/**
 * clears only the input string
 */
function InputClear() {
    errormessage = "";
    displayErrorMessage();
    currentInputdisp = "";
    currentInputreal = "";
    delete_disp = [];
    delete_real = [];
    displayCurrentInputdisp();
}

/**
 * checks whether two operators in a row is a problem
 * @param   {string} op operator
 * @returns {boolean} whether or not
 */
function mult_or_div(op) {
    var truth = false;
    if (op == "/" || op == "*") {
        if (currentInputdisp.charAt((currentInputdisp.length) - 1) == "+" || currentInputdisp.charAt((currentInputdisp.length) - 1) == "-") {
            truth = true;
        }
    }
    return truth;
}
/**
 * adds an operator to the end of current input after first checking for any errors that may exist
 * @param {string} op operator
 */
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
            delete_disp.push(1);
            currentInputreal = currentInputreal + op;
            delete_real.push(1);
        }
        displayCurrentInputdisp();
    }
}
/**
 * Calculate the real current input and display it
 */
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
                    delete_disp = one_delete;
                    var evaluation = (Math.round(eval(currentInputreal) * 1000000)) / 1000000;
                    currentInputdisp = evaluation.toString();
                    delete_disp = [];
                    currentInputreal = evaluation.toString();
                    delete_real = [];
                }
            }
        }
    }
    displayCurrentInputdisp();
}
/**
 * Change the sign of the current input
 */
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
            delete_disp.push((3 + currentInputdisp.length));
            currentInputreal = "-(" + currentInputreal + ")";
            delete_real.push((3 + currentInputreal.length));
        }
    }
    displayCurrentInputdisp();
}
// Clear the current input back to 0
/**
 * [[Description]]
 */
function deleter() {
    errormessage = "";
    displayErrorMessage();
    var dispchange = delete_disp.pop();
    var realchange = delete_real.pop();
    currentInputdisp = currentInputdisp.slice(0, -(dispchange));
    currentInputreal = currentInputreal.slice(0, -(realchange));
    displayCurrentInputdisp();
}
// Change the current input to a percentage
/**
 * [[Description]]
 */
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
                delete_disp.push((currentInputdisp.length));
                currentInputreal = perc.toString();
                delete_real.push((currentInputdisp.length));
            }
        }
        displayCurrentInputdisp();
    }
}
// Calculate the inverse of the current input
/**
 * [[Description]]
 */
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
            delete_disp.push((4 + currentInputdisp.length));
            currentInputreal = "1/(" + currentInputreal + ")";
            delete_real.push((4 + currentInputreal.length));
        }
    }
    displayCurrentInputdisp();
}

/**
 * [[Description]]
 * @param   {[[Type]]} num [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function square(num) {
    num = num * num;
    return num;
}

/**
 * [[Description]]
 */
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
            delete_disp.push((4 + currentInputdisp.length));
            currentInputreal = "square(" + currentInputreal + ")";
            delete_real.push((8 + currentInputreal.length));
        }
    }
    displayCurrentInputdisp();
}

/**
 * [[Description]]
 * @param {[[Type]]} trigtype [[Description]]
 */
function trigbuttons(trigtype) {
    if (trigtype == 1) {
        currentInputdisp = currentInputdisp + "sin(";
        delete_disp.push(4);
        currentInputreal = currentInputreal + "customsin(";
        delete_real.push(10);
        displayCurrentInputdisp();
    }
    else if (trigtype == 2) {
        currentInputdisp = currentInputdisp + "cos(";
        delete_disp.push(4);
        currentInputreal = currentInputreal + "customcos(";
        delete_real.push(10);
        displayCurrentInputdisp();
    }
    else if (trigtype == 3) {
        currentInputdisp = currentInputdisp + "tan(";
        delete_disp.push(4);
        currentInputreal = currentInputreal + "customtan(";
        delete_real.push(10);
        displayCurrentInputdisp();
    }
    else if (trigtype == 4) {
        currentInputdisp = currentInputdisp + "sec(";
        delete_disp.push(4);
        currentInputreal = currentInputreal + "customsec(";
        delete_real.push(10);
        displayCurrentInputdisp();
    }
    else if (trigtype == 5) {
        currentInputdisp = currentInputdisp + "csc(";
        delete_disp.push(4);
        currentInputreal = currentInputreal + "customcsc(";
        delete_real.push(10);
        displayCurrentInputdisp();
    }
    else if (trigtype == 6) {
        currentInputdisp = currentInputdisp + "cot(";
        delete_disp.push(4);
        currentInputreal = currentInputreal + "customcot(";
        delete_real.push(10);
        displayCurrentInputdisp();
    }
    else if (trigtype == 7) {
        currentInputdisp = currentInputdisp + "arcsin(";
        delete_disp.push(7);
        currentInputreal = currentInputreal + "customarcsin(";
        delete_real.push(13);
        displayCurrentInputdisp();
    }
    else if (trigtype == 8) {
        currentInputdisp = currentInputdisp + "arccos(";
        delete_disp.push(7);
        currentInputreal = currentInputreal + "customarccos(";
        delete_real.push(13);
        displayCurrentInputdisp();
    }
    else if (trigtype == 9) {
        currentInputdisp = currentInputdisp + "arctan(";
        delete_disp.push(7);
        currentInputreal = currentInputreal + "customarctan(";
        delete_real.push(13);
        displayCurrentInputdisp();
    }
    else if (trigtype == 10) {
        currentInputdisp = currentInputdisp + "arcsec(";
        delete_disp.push(7);
        currentInputreal = currentInputreal + "customarcsec(";
        delete_real.push(13);
        displayCurrentInputdisp();
    }
    else if (trigtype == 11) {
        currentInputdisp = currentInputdisp + "arccsc(";
        delete_disp.push(7);
        currentInputreal = currentInputreal + "customarccsc(";
        delete_real.push(13);
        displayCurrentInputdisp();
    }
    else if (trigtype == 12) {
        currentInputdisp = currentInputdisp + "arccot(";
        delete_disp.push(7);
        currentInputreal = currentInputreal + "customarccot(";
        delete_real.push(13);
        displayCurrentInputdisp();
    }
}

/**
 * [[Description]]
 * @param   {[[Type]]} num [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function customsin(num) {
    var angle = eval(num);
    if (if_degree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = Math.sin(angle);
    return solution;
}

/**
 * [[Description]]
 * @param   {[[Type]]} num [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function customcos(num) {
    var angle = eval(num);
    if (if_degree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = Math.cos(angle);
    return solution;
}

/**
 * [[Description]]
 * @param   {[[Type]]} num [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function customtan(num) {
    var angle = eval(num);
    if (if_degree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = Math.tan(angle);
    return solution;
}

/**
 * [[Description]]
 * @param   {[[Type]]} num [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function customsec(num) {
    var angle = eval(num);
    if (if_degree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = 1 / (Math.cos(angle));
    return solution;
}

/**
 * [[Description]]
 * @param   {[[Type]]} num [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function customcsc(num) {
    var angle = eval(num);
    if (if_degree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = 1 / (Math.sin(angle));
    return solution;
}

/**
 * [[Description]]
 * @param   {[[Type]]} num [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function customcot(num) {
    var angle = eval(num);
    if (if_degree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = 1 / (Math.tan(angle));
    return solution;
}

/**
 * [[Description]]
 * @param   {[[Type]]} num [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function customarcsin(num) {
    var angle = eval(num);
    if (if_degree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = Math.asin(angle);
    return solution;
}

/**
 * [[Description]]
 * @param   {[[Type]]} num [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function customarccos(num) {
    var angle = eval(num);
    if (if_degree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = Math.acos(angle);
    return solution;
}

/**
 * [[Description]]
 * @param   {[[Type]]} num [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function customarctan(num) {
    var angle = eval(num);
    if (if_degree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = Math.atan(angle);
    return solution;
}

/**
 * [[Description]]
 * @param   {[[Type]]} num [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function customarcsec(num) {
    var angle = eval(num);
    if (if_degree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = 1 / (Math.acos(angle));
    return solution;
}

/**
 * [[Description]]
 * @param   {[[Type]]} num [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function customarccsc(num) {
    var angle = eval(num);
    if (if_degree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = 1 / (Math.asin(angle));
    return solution;
}

/**
 * [[Description]]
 * @param   {[[Type]]} num [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function customarccot(num) {
    var angle = eval(num);
    if (if_degree == "1") {
        angle = (angle * Math.PI) / 180;
    }
    var solution = 1 / (Math.atan(angle));
    return solution;
}

/**
 * [[Description]]
 * @param   {string}  str [[Description]]
 * @returns {boolean} [[Description]]
 */
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

/**
 * [[Description]]
 */
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
                delete_disp.push(1);
                currentInputreal = currentInputreal + ")";
                delete_real.push(1);
            }
            displayCurrentInputdisp();
        }
    }
}

/**
 * [[Description]]
 */
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
        delete_disp.push(1);
        currentInputreal = currentInputreal + "(";
        delete_real.push(1);
        displayCurrentInputdisp();
    }
}

/**
 * [[Description]]
 * @param   {[[Type]]} num [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function toFactorial(num) {
    var Factorial_num = 1;
    for (var i = 1; i <= num; i++) {
        Factorial_num = Factorial_num * i;
    }
    return (Factorial_num).toString();
}
// Calculate the factorial of the current input
/**
 * [[Description]]
 */
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
        delete_disp.push(1);
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
        delete_disp.push(1 + numlength);
        delete_real.push(13 + numlength);
        displayCurrentInputdisp();
    }
}

/**
 * [[Description]]
 */
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
        delete_disp.push(2);
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
            delete_disp.push(numlength);
            delete_real.push(9 + numlength);
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
            delete_disp.push(numlength);
            delete_real.push(9 + numlength);
            displayCurrentInputdisp();
        }
    }
}

/**
 * [[Description]]
 */
function pibutton() {
    currentInputdisp += "π";
    delete_disp.push(1);
    currentInputreal += "(Math.PI)";
    delete_real.push(9);
    displayCurrentInputdisp();
}

/**
 * [[Description]]
 */
function ebutton() {
    currentInputdisp += "e";
    delete_disp.push(1);
    currentInputreal += "(Math.E)";
    delete_real.push(8);
    displayCurrentInputdisp();
}


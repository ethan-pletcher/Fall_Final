// Test for inputing digits
QUnit.test("Add digits test", function (assert) {
          addDigit('1');
          addDigit('2');
          assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
          currentInputdisp = '';
          currentInputreal = '';
});
// Test adding one, then two decimals
QUnit.test("Add decimal test", function (assert) {
          addDecimal();
          addDigit('2');
          assert.equal(document.getElementById("screen").value, ".2", "Passed - Expected .2");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the displayErrorMessage function.", function (assert) {
          errormessage = "Testing..."
          displayErrorMessage()
          assert.equal(document.getElementById("screen2").value, "Testing...", "Passed - Expected Testing...");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the lastDigitOperator function.", function (assert) {
          var str1 = '3+';
          var str2 = '3-';
          var str3 = '3*';
          var str4 = '3/';
          var str5 = '3';
          var result = lastDigitOperator(str1);
          assert.deepEqual(result, true, "We expect result to be true");
          var result = lastDigitOperator(str2);
          assert.deepEqual(result, true, "We expect result to be true");
          var result = lastDigitOperator(str3);
          assert.deepEqual(result, true, "We expect result to be true");
          var result = lastDigitOperator(str4);
          assert.deepEqual(result, true, "We expect result to be true");
          var result = lastDigitOperator(str5);
          assert.deepEqual(result, false, "We expect result to be false");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the lastDigitDecimal function.", function (assert) {
          var str1 = '3.';
          var str2 = '3';
          var result = lastDigitDecimal(str1);
          assert.deepEqual(result, true, "We expect result to be true");
          var result = lastDigitDecimal(str2);
          assert.deepEqual(result, false, "We expect result to be false");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the eButton function.", function (assert) {
          addDigit("3");
          addOperator("+");
          eButton();
          assert.equal(currentInputdisp, "3+e", "Passed - 3+e");
          assert.equal(currentInputreal, "3+(Math.E)", "Passed - 3+(Math.E)");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the piButton function.", function (assert) {
          addDigit("3");
          addOperator("+");
          piButton();
          assert.equal(currentInputdisp, "3+π", "Passed - 3+π");
          assert.equal(currentInputreal, "3+(Math.PI)", "Passed - 3+(Math.PI)");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the squareButton function.", function (assert) {
          addDigit("3");
          squareButton();
          assert.equal(currentInputdisp, "(3)^2", "Passed - (3)^2");
          assert.equal(currentInputreal, "square(3)", "Passed - square(3)");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the square function.", function (assert) {
          var str1 = 2;
          var str2 = 3;
          var result = square(str1);
          assert.deepEqual(result, 4, "We expect result to be 4");
          var result = square(str2);
          assert.deepEqual(result, 9, "We expect result to be 9");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the inverse function.", function (assert) {
          addDigit("3");
          inverse();
          assert.equal(currentInputdisp, "1/(3)", "Passed - 1/(3)");
          assert.equal(currentInputreal, "1/(3)", "Passed - 1/(3)");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the percentage function.", function (assert) {
          addDigit("4");
          addDigit("5");
          percentage()
          assert.equal(currentInputdisp, "0.45", "Passed - 0.45");
          assert.equal(currentInputreal, "0.45", "Passed - 0.45");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the displayCurrentInputdisp function.", function (assert) {
          currentInputdisp = "Testing..."
          displayCurrentInputdisp()
          assert.equal(document.getElementById("screen").value, "Testing...", "Passed - Expected Testing...");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the squareRoot function.", function (assert) {
          addDigit("3");
          addOperator("+");
          squareRoot();
          assert.equal(currentInputdisp, "3+√(", "Passed - 3+√(");
          assert.equal(currentInputreal, "3+Math.sqrt(", "Passed - 3+Math.sqrt(");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the changeIfDegree function.", function (assert) {
          allClear();
          changeIfDegree();
          assert.equal(if_degree, "1", "Passed - 1");
          changeIfDegree();
          assert.equal(if_degree, "0", "Passed - 0");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the lastDigitOperatorMultDiv function.", function (assert) {
          var str1 = '3+';
          var str2 = '3-';
          var str3 = '3*';
          var str4 = '3/';
          var str5 = '3';
          var result = lastDigitOperatorMultDiv(str1);
          assert.deepEqual(result, false, "We expect result to be false");
          var result = lastDigitOperatorMultDiv(str2);
          assert.deepEqual(result, false, "We expect result to be false");
          var result = lastDigitOperatorMultDiv(str3);
          assert.deepEqual(result, true, "We expect result to be true");
          var result = lastDigitOperatorMultDiv(str4);
          assert.deepEqual(result, true, "We expect result to be true");
          var result = lastDigitOperatorMultDiv(str5);
          assert.deepEqual(result, false, "We expect result to be false");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the secondDecimal function.", function (assert) {
          var str1 = "4.5";
          var str2 = "4.5+(3-2.";
          var str3 = "4.5+(3-2";
          var result = secondDecimal(str1);
          assert.deepEqual(result, true, "We expect result to be true");
          var result = secondDecimal(str2);
          assert.deepEqual(result, true, "We expect result to be true");
          var result = secondDecimal(str3);
          assert.deepEqual(result, false, "We expect result to be false");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the mPlus function.", function (assert) {
          addDigit("3");
          addOperator("*");
          addDigit("2");
          mPlus();
          assert.equal(mem_var, "6", "Passed - 6");
          currentInputdisp = '';
          currentInputreal = '';
          addDigit("3");
          addOperator("*");
          addDigit("2");
          mPlus();
          assert.equal(mem_var, "12", "Passed - 12");
          currentInputdisp = '';
          currentInputreal = '';
          mem_var = "0";
});
QUnit.test("Test the mMinus function.", function (assert) {
          addDigit("3");
          addOperator("*");
          addDigit("2");
          mMinus();
          assert.equal(mem_var, "-6", "Passed - -6");
          currentInputdisp = '';
          currentInputreal = '';
          addDigit("3");
          addOperator("*");
          addDigit("2");
          mMinus();
          assert.equal(mem_var, "-12", "Passed - -12");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the mReference function.", function (assert) {
          mem_var = "-12"
          mReference();
          assert.equal(mem_var, "-12", "Passed - -12");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the allClear function.", function (assert) {
          currentInputdisp = '56';
          currentInputreal = '34+9';
          mem_var = '123';
          allClear();
          assert.equal(mem_var, "0", "Passed - 0");
          assert.equal(currentInputdisp, "", "Passed - ");
          assert.equal(currentInputreal, "", "Passed - ");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the inputClear function.", function (assert) {
          currentInputdisp = '56';
          currentInputreal = '34+9';
          inputClear();
          assert.equal(currentInputdisp, "", "Passed - ");
          assert.equal(currentInputreal, "", "Passed - ");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the mClear function.", function (assert) {
          mem_var = '123';
          mClear();
          assert.equal(mem_var, "0", "Passed - 0");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the mult_or_div function.", function (assert) {
          addDigit("2");
          addOperator("+");
          var result = mult_or_div("/");
          assert.deepEqual(result, true, "We expect result to be true");
          currentInputdisp = '';
          currentInputreal = '';
          addDigit("2");
          var result = mult_or_div("*");
          assert.deepEqual(result, false, "We expect result to be false");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the addOperator function.", function (assert) {
          addDigit("2");
          addOperator("+");
          assert.equal(currentInputdisp, "2+", "Passed - 2+");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the calculate function.", function (assert) {
          addDigit("2");
          addDigit("4");
          addOperator("*");
          addDigit("2");
          addOperator("/");
          addDigit("12");
          inverse();
          calculate();
          assert.equal(currentInputdisp, "0.25", "Passed - 0.25");
          assert.equal(currentInputreal, "0.25", "Passed - 0.25");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the trigButton function.", function (assert) {
        trigButtons(1);
        assert.deepEqual(currentInputdisp, "sin(", "Passed - sin(")
        assert.deepEqual(currentInputreal, "customSin(", "Passed - customSin(")
        currentInputdisp = '';
        currentInputreal = '';
        trigButtons(2);
        assert.deepEqual(currentInputdisp, "cos(", "Passed - cos(")
        assert.deepEqual(currentInputreal, "customCos(", "Passed - customCos(")
        currentInputdisp = '';
        currentInputreal = '';
        trigButtons(3);
        assert.deepEqual(currentInputdisp, "tan(", "Passed - tan(")
        assert.deepEqual(currentInputreal, "customTan(", "Passed - customTan(")
        currentInputdisp = '';
        currentInputreal = '';
        trigButtons(4);
        assert.deepEqual(currentInputdisp, "sec(", "Passed - sec(")
        assert.deepEqual(currentInputreal, "customSec(", "Passed - customSec(")
        currentInputdisp = '';
        currentInputreal = '';
        trigButtons(5);
        assert.deepEqual(currentInputdisp, "csc(", "Passed - csc(")
        assert.deepEqual(currentInputreal, "customCsc(", "Passed - customCsc(")
        currentInputdisp = '';
        currentInputreal = '';
        trigButtons(6);
        assert.deepEqual(currentInputdisp, "cot(", "Passed - cot(")
        assert.deepEqual(currentInputreal, "customCot(", "Passed - customCot(")
        currentInputdisp = '';
        currentInputreal = '';
        trigButtons(7);
        assert.deepEqual(currentInputdisp, "arcsin(", "Passed - arcsin(")
        assert.deepEqual(currentInputreal, "customArcSin(", "Passed - customArcSin(")
        currentInputdisp = '';
        currentInputreal = '';
        trigButtons(8);
        assert.deepEqual(currentInputdisp, "arccos(", "Passed - arccos(")
        assert.deepEqual(currentInputreal, "customArcCos(", "Passed - customArcCos(")
        currentInputdisp = '';
        currentInputreal = '';
        trigButtons(9);
        assert.deepEqual(currentInputdisp, "arctan(", "Passed - arctan(")
        assert.deepEqual(currentInputreal, "customArcTan(", "Passed - customArcTan(")
        currentInputdisp = '';
        currentInputreal = '';
        trigButtons(10);
        assert.deepEqual(currentInputdisp, "arcsec(", "Passed - arcsec(")
        assert.deepEqual(currentInputreal, "customArcSec(", "Passed - customArcSec(")
        currentInputdisp = '';
        currentInputreal = '';
        trigButtons(11);
        assert.deepEqual(currentInputdisp, "arccsc(", "Passed - arccsc(")
        assert.deepEqual(currentInputreal, "customArcCsc(", "Passed - customArcCsc(")
        currentInputdisp = '';
        currentInputreal = '';
        trigButtons(12);
        assert.deepEqual(currentInputdisp, "arccot(", "Passed - arccot(")
        assert.deepEqual(currentInputreal, "customArcCot(", "Passed - customArcCot(")
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the customSin function.", function (assert) {
        trigButtons(1);
        addDigit('90')
        addDigit(')')
        changeIfDegree();
        calculate(currentInputdisp);
        assert.deepEqual(currentInputdisp, "1", "Passed - 1");
        assert.deepEqual(currentInputreal, "1", "Passed - 1");
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the customCos function.", function (assert) {
        trigButtons(2);
        addDigit('0')
        addDigit(')')
        changeIfDegree();
        calculate(currentInputdisp);
        assert.deepEqual(currentInputdisp, "1", "Passed - 1");
        assert.deepEqual(currentInputreal, "1", "Passed - 1");
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the customTan function.", function (assert) {
        trigButtons(3);
        addDigit('45')
        addDigit(')')
        changeIfDegree();
        calculate(currentInputdisp);
        assert.deepEqual(currentInputdisp, "1", "Passed - 1");
        assert.deepEqual(currentInputreal, "1", "Passed - 1");
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the customSec function.", function (assert) {
        trigButtons(4);
        addDigit('60')
        addDigit(')')
        changeIfDegree();
        calculate(currentInputdisp);
        assert.deepEqual(currentInputdisp, "2", "Passed - 2");
        assert.deepEqual(currentInputreal, "2", "Passed - 2");
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the customCsc function.", function (assert) {
        trigButtons(5);
        addDigit('30')
        addDigit(')')
        changeIfDegree();
        calculate(currentInputdisp);
        assert.deepEqual(currentInputdisp, "2", "Passed - 2");
        assert.deepEqual(currentInputreal, "2", "Passed - 2");
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the customCot function.", function (assert) {
        trigButtons(6);
        addDigit('45')
        addDigit(')')
        changeIfDegree();
        calculate(currentInputdisp);
        assert.deepEqual(currentInputdisp, "1", "Passed - 1");
        assert.deepEqual(currentInputreal, "1", "Passed - 1");
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the customArcSin function.", function (assert) {
        trigButtons(7)
        addDigit('0.5')
        addDigit(')')
        calculate(currentInputdisp);
        assert.deepEqual(currentInputdisp, "0.523599", "Passed - 0.523599");
        assert.deepEqual(currentInputreal, "0.523599", "Passed - 0.523599");
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the customArcCos function.", function (assert) {
        trigButtons(8)
        addDigit('1')
        addDigit(')')
        calculate(currentInputdisp);
        assert.deepEqual(currentInputdisp, "0", "Passed - 0");
        assert.deepEqual(currentInputreal, "0", "Passed - 0");
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the customArcTan function.", function (assert) {
        trigButtons(9)
        addDigit('1')
        addDigit(')')
        calculate(currentInputdisp);
        assert.deepEqual(currentInputdisp, "0.785398", "Passed - 0.785398");
        assert.deepEqual(currentInputreal, "0.785398", "Passed - 0.785398");
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the customArcSec function.", function (assert) {
        trigButtons(10)
        addDigit('1')
        addDigit(')')
        changeIfDegree();
        calculate(currentInputdisp);
        assert.deepEqual(currentInputdisp, "0.643773", "Passed - 0.643773");
        assert.deepEqual(currentInputreal, "0.643773", "Passed - 0.643773");
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the customArcCsc function.", function (assert) {
        trigButtons(11)
        addDigit('1')
        addDigit(')')
        changeIfDegree();
        calculate(currentInputdisp);
        assert.deepEqual(currentInputdisp, "0.63662", "Passed - 0.63662");
        assert.deepEqual(currentInputreal, "0.63662", "Passed - 0.63662");
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the customArcCot function.", function (assert) {
        trigButtons(12)
        addDigit('10')
        addDigit(')')
        changeIfDegree();
        calculate(currentInputdisp);
        assert.deepEqual(currentInputdisp, "5.78729", "Passed - 5.78729");
        assert.deepEqual(currentInputreal, "5.78729", "Passed - 5.78729");
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the parenthesisBackward function.", function (assert) {
        addDigit('(')
        addDigit('5')
        parenthesisBackward();
        assert.deepEqual(currentInputdisp, "(5)", "Passed - (5)");
        assert.deepEqual(currentInputreal, "(5)", "Passed - (5)");
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the parenthesisForward function.", function (assert) {
        addDigit('5')
        addOperator('+')
        parenthesisForward();
        assert.deepEqual(currentInputdisp, "5+(", "Passed - 5+(");
        assert.deepEqual(currentInputreal, "5+(", "Passed - 5+(");
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the changeSign function.", function (assert) {
        addDigit('5')
        changeSign(currentInputdisp);
        assert.deepEqual(currentInputdisp, "-(5)", "Passed -(5)")
        assert.deepEqual(currentInputreal, "-(5)", "Passed -(5)")
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the factorial function.", function (assert) {
        addDigit('5')
        factorial();
        assert.deepEqual(currentInputdisp, "5!", "Passed - 5!")
        assert.deepEqual(currentInputreal, "toFactorial(5)", "Passed - toFactorial(5)")
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the deleter function.", function (assert) {
        addDigit('5')
        addOperator('+')
        eButton();
        deleter();
        assert.deepEqual(currentInputdisp, "5+", "Passed - 5+")
        assert.deepEqual(currentInputreal, "5+", "Passed - 5+")
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the exponents function.", function (assert) {
        addDigit('5')
        exponents(currentInputdisp);
        addDigit('3')
        addDigit(')')
        calculate(currentInputdisp);
        assert.deepEqual(currentInputdisp, "125", "Passed - 125");
        assert.deepEqual(currentInputreal, "125", "Passed - 125");
        currentInputdisp = '';
        currentInputreal = '';
});
QUnit.test("Test the toFactorial function.", function (assert) {
        addDigit('5')
        factorial(currentInputdisp);
        calculate(currentInputdisp);
        assert.deepEqual(currentInputdisp, "120", "Passed - 120");
        assert.deepEqual(currentInputreal, "120", "Passed - 120");
        currentInputdisp = '';
        currentInputreal = '';
});

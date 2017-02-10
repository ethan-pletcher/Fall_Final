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
          addOperator("2");
          mPlus();
          assert.equal(mem_var, "6", "Passed - 6");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the mMinus function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the mReference function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the allClear function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the inputClear function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the mClear function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the mult_or_div function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the addOperator function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the calculate function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the trigButton function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the customSin function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the customCos function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the customTan function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the customSec function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the customCsc function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the customCot function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the customArcSin function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the customArcCos function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the customArcTan function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the customArcSec function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the customArcCsc function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the customArcCot function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the parenthesisBackward function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the parenthesisForward function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the changeSign function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the factorial function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the deleter function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the exponents function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the whichParenthisis function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the toFactorial function.", function (assert) {
          currentInputdisp = '';
          currentInputreal = '';
});

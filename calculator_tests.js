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
    errormessage = "FlarGarLargst"
    displayErrorMessage()
    assert.equal(document.getElementById("screen2").value, "FlarGarLargst", "Passed - Expected FlarGarLargst");
    currentInputdisp = '';
    currentInputreal = '';
});
});
QUnit.test("Test the ldo function.", function (assert) {
    currentInputdisp = '';
    currentInputreal = '';
});
QUnit.test("Test the ldp function.", function (assert) {
    currentInputdisp = '';
    currentInputreal = '';
});
QUnit.test("Test the eButton function.", function (assert) {
    currentInputdisp = '';
    currentInputreal = '';
});
QUnit.test("Test the piButton function.", function (assert) {
    currentInputdisp = '';
    currentInputreal = '';
});
QUnit.test("Test the squareButton function.", function (assert) {
    currentInputdisp = '';
    currentInputreal = '';
});
QUnit.test("Test the square function.", function (assert) {
    currentInputdisp = '';
    currentInputreal = '';
});
QUnit.test("Test the inverse function.", function (assert) {
    currentInputdisp = '';
    currentInputreal = '';
});
QUnit.test("Test the percentage function.", function (assert) {
    currentInputdisp = '';
    currentInputreal = '';
});
QUnit.test("Test the displayCurrentInputdisp function.", function (assert) {
    currentInputdisp = '';
    currentInputreal = '';
});
QUnit.test("Test the squareRoot function.", function (assert) {
    currentInputdisp = '';
    currentInputreal = '';
});
QUnit.test("Test the changeIfDegree function.", function (assert) {
    currentInputdisp = '';
    currentInputreal = '';
});
QUnit.test("Test the lastDigitOperatorMultDiv function.", function (assert) {
    currentInputdisp = '';
    currentInputreal = '';
});
QUnit.test("Test the secondDecimal function.", function (assert) {
    currentInputdisp = '';
    currentInputreal = '';
});
QUnit.test("Test the mPlus function.", function (assert) {
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


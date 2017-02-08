// Test for inputing digits
QUnit.test("Add digits test", function (assert) {
<<<<<<< HEAD
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
    currentInputdisp = '0'
=======
          addDigit('1');
          addDigit('2');
          assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
          allClear();
>>>>>>> origin/master
});

// Test adding one, then two decimals
QUnit.test("Add decimal test", function (assert) {
<<<<<<< HEAD
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
    currentInputdisp = '0'
});
QUnit.test("Test the displayErrorMessage function.", function (assert) {
    errormessage = "FlarGarLargst"
    displayErrorMessage()
    assert.equal(document.getElementById("screen2").value, "FlarGarLargst", "Passed - Expected FlarGarLargst");
    currentInputdisp = '0'
=======
          addDecimal();
          addDigit('2');
          addDecimal();
          assert.equal(document.getElementById("screen").value, ".2", "Passed - Expected .2");
>>>>>>> origin/master
});

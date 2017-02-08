// Test for inputing digits
QUnit.test("Add digits test", function (assert) {
          addDigit('1');
          addDigit('2');
          assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
          allClear();
});

// Test adding one, then two decimals
QUnit.test("Add decimal test", function (assert) {
          addDecimal();
          addDigit('2');
          addDecimal();
          assert.equal(document.getElementById("screen").value, ".2", "Passed - Expected .2");
});

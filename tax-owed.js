// Write a function in a language of your choice that accepts a taxable income (string)
// and returns tax owed (string) given the following marginal tax rates:

// + 15% on the first $45,916 of taxable income,
// + 20.5% on the next $45,915 of taxable income
//    (the portion of taxable income over $45,916 up to $91,831)
// + 26% on the next $50,522 of taxable income
//    (the portion of taxable income over $91,831 up to $142,353)
// + 29% on the next $60,447 of taxable income
//    (the portion of taxable income over $142,353 up to $202,800)
// + 33% of taxable income over $202,800

const taxBrackets = [202800, 142353, 91831, 45916, 0];
const taxPercents = [0.33, 0.29, 0.26, 0.205, 0.15];
const taxBreakdown = {};

const setUpBreakdown = function() {
  let previous = 0;

  for (let i = taxBrackets.length - 1; i > 0; i--) {
    const dollar = taxBrackets[i];
    const percent = taxPercents[i];
    taxBreakdown[dollar] = [percent, previous];

    previous += percent * (taxBrackets[i - 1] - dollar);
  }
};

setUpBreakdown();

var taxableIncome = function(income) {
  let taxes = 0;
  let incomeInt = parseFloat(income);

  for (let i = 0; i < taxBrackets.length; i++) {
    const bracket = taxBrackets[i];
    const bracketInt = Number(bracket);

    if (incomeInt > bracketInt) {
      const percent = taxBreakdown[bracket][0];
      taxes += percent * (incomeInt - bracketInt);
      taxes += taxBreakdown[bracket][1];
      return taxes;
    }
  }
};

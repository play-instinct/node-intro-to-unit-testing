const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
// test the normal case
it('should return fizz, buzz, or fizzbuzz if divisible by 3, 5, 15', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 3, expected: 'fizz'},
      {a: 10,  expected: 'buzz'},
      {a: 15,  expected: 'fizz-buzz'}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
});


it('should raise error if args not num data type', function() {
  // range of bad inputs where not both are numbers
  const badInputs = [
  'string', 1.345, 
  ];
  // prove that an error is raised for bad inputs
  badInputs.forEach(function(input) {
    (function() {
        adder(input)
    }).should.throw(Error);
  });
});



});
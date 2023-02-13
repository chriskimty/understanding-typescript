function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// *if variable and you want to assign value later, you can specify the type like so
let number1: number;
number1 = 5; // so if number1 = '5', will throw error
// however, let number1: number = 5 (bad practice) - the variable already can infer that let number1 = 5 should be a number
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);

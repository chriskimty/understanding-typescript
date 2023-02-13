function add(n1: number, n2: number) {
  return n1 + n2;
}

// when we add a type as below, and we run tsc app.ts, compiler will give us error so we could check before
// const number1 = "5";
const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

// TS's type system only helps you during development (i.e. before the code gets compiled), bc browsers have no built-in TS support

// JS is dynamically typed: perfectly fine that we have a variable which might initially hold a number where we later assign a string to it. that's why we have the typeof operator so we could check the type of operatorso we can check the current type of something at runtime if the code depends on a certain type

// TS is statically typed: we define the types of variables and parameters during development; they don't suddenly change during runtime. allows us to fix bugs earlier during development rather than during runtime.

// TL;DR: JS uses "dynamic types" (resolved @ runtime) vs. TS uses "static types" (set during development)

// Type Casing**
// In TS, you work with string or number (it's not String or Number)
// core primitive types in TS are ALL lowercase

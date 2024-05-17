MIT ASSIGNMENT

# Project Overview

Write the unit tests, and implement the function Greet() described below.

Null Values
The function handles null values by introducing a default. When the name parameter is null, the function should return the string “Hello there!”.

Shouting
The function also handles shouting. When name is all uppercase, the function should shout back to the user. For example, when the name is “JOSE”, the function should return the string “HELLO JOSE!”.

Two Names
The function can handle two names as input. If the name parameter is an array containing two names, then both names should be greeted. For example, if the input parameter is [‘Jose’,‘Pep’], the function should return the string: “Hello, Jose, Pep”.

Arbitrary Number of Names
The function can handle an arbitrary number of names as input. If the name parameter is an array of multiple names, all names must be greeted. For example, if the input parameter is [‘Alex’,‘Arsene’,‘Jose’,‘Zidane’], the function should return the string: “Hello, Alex, Arsene, Jose, Zidane”.



# Project

This project consists of two main components:

1. `greet.js`: This file contains the primary code that is subject to testing.
2. `greet.test.js`: This file houses the actual tests that will be executed.

## Using Jest and Babel

In this particular instance, we are utilizing Jest in conjunction with a Babel configuration. This setup allows us to leverage modern EcmaScript syntax for the import and export of modules in JavaScript.

To facilitate this, it was necessary to install both `babel-core` and `babel-jest`. Additionally, the `package.json` file required some configuration to ensure seamless operation.

## Running the Tests

To execute the tests, simply type `npm test` into your terminal. All test cases should pass successfully.

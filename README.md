## Rock, Paper, Scissors!

A simple Rock, Paper, Scissors! game written with ES6.
All javascript's modules are transpiled on the fly with [traceur](https://github.com/google/traceur-compiler).

## Play

Clone the repository and play the game in you favourite browser loading index.html,  
or serve the game with a simple:

    $ python -m SimpleHTTPServer

## Test

All test are written with [mocha](https://github.com/mochajs/mocha) test framework; [expect.js](https://github.com/LearnBoost/expect.js/) library is used for the various asserts.  
Because all game's module are ES6 ones, the test runner use [mocha-traceur](https://www.npmjs.org/package/mocha-traceur) to transpile the code before the test.

First install all dependencies:

	$ npm install

Then run all tests: 

	$ mocha --compilers js:mocha-traceur -R spec test 

That's it!
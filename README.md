# equation-solver

jseq-solver: solves linear equations systems by gauss-elimination

## use
for example:

         1x+1y+1z=3
         2x-3y-1z=2
         4x-5y-1z=1


node eq-solver {\"size\":3,\"matrix\":[

    [1,1,1,3],
    [2,-3,-1,2],
    [4,-5,-1,1]

]}

Set matrix-size and the equations in json format to parameters (as shown below), the last value of each line corresponds to the constant!

## use package 
npm i jsequation-solver


    var eq = require('jsequation-solver/eq-calc');
    result = eq.eqcalc('{"size":3,"matrix":[[1,1,1,3],[2,-3,-1,2],[4,-5,-1,1]]}');
    console.log(result);

## Demo

here is a demo of the package used in a android app:
https://tinyurl.com/y9bk8466



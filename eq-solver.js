// read commandline
if ( process.argv[2]) {
  equation =  process.argv[2];
}

main(equation);

// do calculation
function main(equation) {
   var eq = require('./eq-calc');
   result = eq.eqcalc(equation);
   console.log(result);
}

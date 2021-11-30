// function for beep sound.


// function alertTerminal(){
//   console.log("\u0007");
// }

// alertTerminal();

// Edge Cases

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

// 1.) return input from the command line using processargv
      // *. if no numbers are provided, then end.
      // *. if a number is not a number OR a number is negative, then ignore.

const argvInput = process.argv.slice(2).filter(time => !isNaN(time)).filter(time => time >= 0)

// 2.) Loop thru the array. 
// 3.) for every iteration of time in the array, trigger the beep sound after x seconds have passed.

argvInput.forEach((time) => {
  setTimeout(() => {
    process.stdout.write('\u0007');
  }, time * 1000);
});

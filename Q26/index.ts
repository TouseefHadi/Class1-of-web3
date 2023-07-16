let alienColor: string = 'green';

// Version that runs the if block
if (alienColor === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
  console.log("Congratulations! You just earned 10 points for shooting the alien.");
}

// Version that runs the else block
alienColor = 'red';
if (alienColor === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
  console.log("Congratulations! You just earned 10 points for shooting the alien.");
}

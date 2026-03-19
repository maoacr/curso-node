let min = 1;
let max = 100;

if (process.argv.length > 2) {
  min = parseInt(process.argv[2], 10);
}

if (process.argv.length > 3) {
  max = parseInt(process.argv[3], 10);
}

if (isNaN(min) || isNaN(max)) {
  console.error('Please provide valid numbers for min and max between 1 and 100.');
  process.exit(1);
}

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);
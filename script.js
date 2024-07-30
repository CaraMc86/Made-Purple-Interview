const sum = (num) => {
  let n = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) n += i;
  }
  return n;
};

console.log(sum(999));

// alternative

const sum1 = (num) => {
  let n = 0;
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) n += i;
  }
  return n;
};

console.log(sum1(1000));

// -------------------------------

// Create function that takes the limit as an argument
const evenFibSum = (limit) => {
  // Declare the main looping array with teh first 2 values
  const fibArr = [1, 2];
  // Decalre an empty array to collect the even values
  const fibEven = [];

  // While loop to run and break out once the value in the loop exceeds 4M
  while (true) {
    // logic to find the next value in the array by taking the last most index position (-1) and adds it to the second last index position (-2)
    // Added to the temp variable fibValue
    let fibValue = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];

    // check if the last value exceeds the limit and break out of the loop
    if (fibValue > limit) break;
    // Push the value to the array to continue the main loop - needed to generate the whole fib sequence
    fibArr.push(fibValue);
    //seperate loop to capture the even numbers
    if (fibValue % 2 === 0) {
      fibEven.push(fibValue);
    }
  }
  // create variable to add the last two items in fibEven and return it - I've left a console log in to check the even numbers in the arr.
  const lastTwoSum = fibEven[fibEven.length - 1] + fibEven[fibEven.length - 2];
  // Copnsole logged the array to check only even numbers in the array
  console.log(fibEven);
  return lastTwoSum;
};

console.log(evenFibSum(4000000));

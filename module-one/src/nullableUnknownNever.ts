// nullable types
const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log('From DB:ALL USER');
  }
};
getUser(null);

// unknown type
const productDiscountCalculator = (input: unknown) => {
  if (typeof input === 'number') {
    const dicountedPrice = input * 0.1;
    // console.log(`Discounted Price: ${dicountedPrice}`);
  } else if (typeof input === 'string') {
    const splitedInput = input.split(/[ ,]+/);
    const dicountedPrice = Number(splitedInput[0]) * 0.1;
    // console.log(`Discounted Price: ${dicountedPrice}`);
  }
};
productDiscountCalculator(1000);
productDiscountCalculator('1000 TK');

// never type
const throwError = (message: string): never => {
  throw new Error(message);
};

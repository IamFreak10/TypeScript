// Genric Function

const createArray = (value: string) => {
  return [value];
};
const createArrayWithGenric = <T>(value: T) => {
  return [value];
};
const arrNumber = createArrayWithGenric(12);

// tupple
const createArrayWithTuple = (param1: string, param2: number) => {
  return [param1, param2];
};
const createArrayTupleWithGenric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];
const res1 = createArrayTupleWithGenric('X', 12);
const createInfoWithGeniric = <T>(value: T) => {
  return {
    courseName: 'Genric Function',
    ...value,
  };
};

const student1 = {
  name: 'Mahfuj',
  age: 23,
  hasRamda: true,
  isBSL: false,
};
const cat = {
  name: 'Meaw Biral',
  age: 12,
  isCute: true,
  enemyName: 'Mahfuj',
};
const res = createInfoWithGeniric(cat);
console.log(res);

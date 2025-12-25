type st = { id: number; name: string };

const createInfoWithGeniric = <T extends st>(value: T) => {
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
const student3 = {
  id: 1,
  nam: 'Rakib',
  haswatch: true,
  name: 'Chor',
};
const res = createInfoWithGeniric(student3);
console.log(res);

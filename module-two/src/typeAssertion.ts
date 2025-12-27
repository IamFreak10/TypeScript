let anything: any;
anything = 'Mahfuj';
// (anything as string).length
// * Now it will kaj korbe shob methhod suggest korbe

const kgToGMConverter = (
  input: number | string
): string | number | undefined => {
  if (typeof input === 'number') {
    return input * 1000;
  } else if (typeof input === 'string') {
    const [value] = input.split(' ');
    return Number(value) * 1000;
  }
};
const result1 = kgToGMConverter(33) as number;


console.log({ result1 });
const result2 = kgToGMConverter('33 KG') as number;

console.log({ result2 });

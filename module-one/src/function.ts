function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}
const addArrow = (num1: number, num2: number): number => num1 + num2;
const poorUser = {
  name: 'Mafuj',
  balance: 0,
  addBalance(value: number) {
   
    return this.balance + value;
  },
};

console.log(poorUser.addBalance(800));

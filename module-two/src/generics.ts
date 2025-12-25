// dynamically generalize
type GeniricArray<T> = Array<T>;
// const friends:string[]=['Rahim','Karim','Mahim','Biswas','Kamal','Kutty','Rakib'];
const friends: GeniricArray<string> = [
  'Rahim',
  'Karim',
  'Mahim',
  'Biswas',
  'Kamal',
  'Kutty',
  'Rakib',
];
// const rollNumber:number[]=[1,2,3,4,5,6,7,8,9,10];
const rollNumber: GeniricArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const isEligible: boolean[]=[true,false,true,false,true,false,true,false,true,false];
const isEligible: GeniricArray<boolean> = [
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
];
type Coordinates<X, Y> = [X, Y];
const c1: Coordinates<number, string> = [12, '12'];
const c2: Coordinates<string, number> = ['12', 12];

// ?Geniric For Object
type user = { name: string; age: number };
const userList: GeniricArray<user> = [
  {
    name: 'Mahfuj',
    age: 23,
  },
  {
    name: 'Rakib',
    age: 23,
  },
];

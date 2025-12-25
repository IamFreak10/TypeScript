// *For type alias use type
// *For interface use interface,start with {}
// *Interface :object type:array,object,function

type User = {
  name: String;
  age: number;
};
interface UserInterface {
  name: String;
  age: number;
}
type Role = {
  role: 'admin' | 'user' | 'guest';
};
type UserWitRole = User & Role;

const user1: UserInterface = {
  name: 'Mahfuj',
  age: 23,
};
interface IUserwithrole extends User {
  role: 'admin' | 'user' | 'guest';
}
const userx: IUserwithrole = {
  name: 'Mahfuj',
  age: 23,
  role: 'admin',
};
// indexing
interface Ifriends {
  [index: number]: string;
}
const friends: Ifriends = ['aa', 'bb', 'ccc'];
// for function :
interface Iadd {
  (num1: number, num2: number): number;
}
const add: Iadd = (num1, num2) => num1 + num2;

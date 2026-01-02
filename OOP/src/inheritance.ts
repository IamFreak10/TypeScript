
class Parent {
   name: string; 
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  getSleep(numOfSleep: number) {
    console.log(`${this.name} is sleeping ${numOfSleep} `);
  } 
}
class Student extends Parent {
  
}
const student1=new Student('Mahfuj',23,'Dhaka');
student1.getSleep(12);
class Teacher extends Parent {
  
  designation: string;
  constructor(name: string, age: number, address: string ,designation: string) {
    super(name, age, address);
    this.designation = 'Teacher';
  }
 
  takeClass(numberOfClass: number) {
    console.log(`${this.name} is taking ${numberOfClass} hour class`);
  }
}
const teacher1=new Teacher("MahfujAB",23,"Dhaka","Professor");
teacher1.takeClass(2);
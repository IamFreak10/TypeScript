// Ploymorphism:বহুরূপি
class Person{
    getSleep(){
        console.log(`I a normal person.I sleep 8 hours`);
    }
}

class Student extends Person{
    getSleep() {
        console.log(`I am a student.I sleep 6 hours`);
    }
}
class nextLevelDevloper extends Person{
    getSleep() {
        console.log(`I am a next level developer.I sleep 4 hours`);
    }
}
const getSleepX = (param:Person) => param.getSleep();
const person1=new Person();
const student1=new Student();
const nextLevelDevloper1=new nextLevelDevloper();
// getSleepX(student1);
class Shape{
    getArea():number{
        return 0
    }
}
class Circle extends Shape{
    // area=pi*r*r
    radius:number
    constructor(radius:number) {
        super();
        this.radius=radius
    }
    getArea(): number {
        return Math.PI*this.radius*this.radius
    }
}
class Rectangle extends Shape{
    length:number
    width:number
    constructor(length:number,width:number) {
        super();
        this.length=length
        this.width=width
    }
    // area=l*w
    getArea(): number {
        return this.length*this.width
    }
}
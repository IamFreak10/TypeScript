class Person{
    name:string;
    constructor(name:string){
        this.name=name;
    }
      getsSleep(numOfHours:number){
        console.log(`${this.name} is sleeping ${numOfHours} hours`);
    }
}
class Student extends Person{
    constructor(name:string){
        super(name);
    }
    doStudy(numOfHours:number){
        console.log(`${this.name} is studying ${numOfHours} hours`);
    }
}
class Teacher extends Person{
    constructor(name:string){
        super(name);
    }
    doTeach(numOfHours:number){
        console.log(`${this.name} is teaching ${numOfHours} hours`);
    }
}
// Function Guard
const isStudent=(user:Person)=>{
    return user instanceof Student
}
const isTeacher=(user:Person)=>{
    return user instanceof Teacher
}
const getUserInfo=(user:Person)=>{
    if(isStudent(user)){
        user.doStudy(10);
    }
    if(isTeacher(user)){
        user.doTeach(10);
    }
}
const student1=new Student("Mahfuj")
const Teacher1=new Teacher("Mahfuj") 
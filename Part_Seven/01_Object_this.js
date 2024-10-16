let student={
    name:"Saikat",
    Class:"2nd Year",
    age:22,
    hello(){
        console.log("Hello");
        console.log(`My name is ${this.name}`); //In there this is student Object.
        console.log(this);
    }
}

student.hello();
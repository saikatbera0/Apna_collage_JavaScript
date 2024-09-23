let obj={
    name:"Saikat",
    deperment:"BCA",
    Roll:30
};
console.log(obj);

console.log("After Updateing Deperment:");

obj.deperment="CSE AIML";

console.log(obj);

console.log("After add new value:");

obj.Hobby="Web Devlopment";

console.log(obj);

// delete objects to use delete keyword

delete obj.Hobby;

console.log("After delete Hobby:");

console.log(obj);

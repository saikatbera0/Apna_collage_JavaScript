let jsondata = '{"message":"https:\/\/images.dog.ceo\/breeds\/dingo\/n02115641_8798.jpg","status":"success"}';
let valid=JSON.parse(jsondata);
console.log(valid);

//to convert api data javascript object.....

let validfact = JSON.stringify(valid);
console.log(validfact);

//to convart json data to string for api call...
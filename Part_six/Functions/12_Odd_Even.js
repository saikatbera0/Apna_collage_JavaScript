function OddOrEven(request) {
    if(request=="Odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request=="Even"){
        return function(n){
            console.log((n%2==0));
        }
    }
}
let func=OddOrEven("Odd");
console.log(func(7));

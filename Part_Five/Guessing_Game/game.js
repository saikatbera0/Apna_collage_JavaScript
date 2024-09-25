let limit=prompt("Enter the random number Limit:->");
const random=Math.floor(Math.random()*limit)+1;
let user=prompt("Enter the guessing Value:->");
while (true) {
    if(user=="Quit"){
        console.log("Quiting Game");
        break;
    }else if (user>random) {
        user=prompt("Enter lower value");
        
    }else if (user<random) {
        user=prompt("Enter Higher Value:");
    }else if (user==random) {
        console.log("Congratulations! You are found the guessing number....");
        alert("Congratulations!");
        break;
    }
    else{
        console.log("Invelid Input");
        break;
    }
}
let url = "https://dog.ceo/api/breeds/image/random";
let button = document.querySelector("button");
let img = document.querySelector("img");

button.addEventListener("click", async() => {
    let fect =await getfect();
    img.src = fect;
})

//Using async and await function
async function getfect() {
    let res = await fetch(url);
    let valid = await res.json();
    console.log(valid);
    console.log(`First:-${valid.message}`);
    return valid.message;
}

getfect();

//Using Axios
async function getimage() {
    let res = await axios.get(url);
    console.log(`secound:-${res.data.message}`);
}
getimage();

//to transfer header use 

//const config = { header: { Accept: "application/json" } };

//let res= await axios.get(url,config);
let url = 'http://universities.hipolabs.com/search?name=';

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let input = document.querySelector("input").value;
    let finalres = await getcollage(input);
    let ul = document.querySelector("ul");
    ul.innerText = "";
    // console.log(input);
    for (res of finalres) {
        let li = document.createElement("li");
        li.innerText = res.name;
        ul.appendChild(li);
    }
})

async function getcollage(input) {
    let result = await axios.get(url + input);
    return result.data;
}
let url = "https://dog.ceo/api/breeds/image/random";
fetch(url)
    .then((res) => {
        console.log(res);
        res.json()//to read the code..
            .then((data) => {
                console.log(data);
                console.log(data.message);
            }) //to readble data
    })
    .catch((err) => {
        console.log(err);
})
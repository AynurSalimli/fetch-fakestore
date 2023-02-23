const container = document.querySelector(".container")

fetch('https://fakestoreapi.com/products')
.then((res) => res.json())
.then((data) => {
    console.log(data);
    data.map((a)=> {
        let price = document.createElement("h4")
        let img = document.createElement("img")
        price.innerHTML = `Price: ${a.price}`
        img.innerHTML = a.image
        img.style.width = "100px"
        img.setAttribute("src", `${a.image}`)
        container.append(price, img)

    })
});
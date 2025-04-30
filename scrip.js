let products = [
    { name: "Snek set", price: 79000, img: "https://via.placeholder.com/200" },
    { name: "Klassik set", price: 34000, img: "https://via.placeholder.com/200" },
    { name: "Do‘stlar 2x", price: 90000, img: "https://via.placeholder.com/200" }
];

let app = document.getElementById("app");

if (app) {
    app.classList.add("app");

    // Style qo‘shamiz
    const style = document.createElement("style");
    style.textContent = `
        .app {
            font-family: Arial;
            padding: 20px;
        }
        .card {
            border: 1px solid #ddd;
            padding: 10px;
            margin: 10px;
            border-radius: 10px;
            width: 200px;
            text-align: center;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            display: inline-block;
        }
        .card img {
            width: 100%;
            border-radius: 8px;
        }
        .price {
            color: crimson;
        }
        .btn {
            padding: 10px;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 18px;
            color: white;
            background-color: crimson;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    products.forEach(product => {
        let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        img.src = product.img;

        let name = document.createElement("h4");
        name.textContent = product.name;

        let price = document.createElement("p");
        price.textContent = product.price.toLocaleString() + " so'm";
        price.classList.add("price");

        let btn = document.createElement("button");
        btn.textContent = "+";
        btn.classList.add("btn");

        btn.onclick = () => {
            let tasdiq = confirm(`${product.name} setini zakaz qilmoqchimisiz?`);
            switch (tasdiq) {
                case true:
                    let soni = prompt(`Siz ${product.name} setini nechta zakaz qilmoqchisiz?`);
                    switch (true) {
                        case (soni && !isNaN(soni) && parseInt(soni) > 0):
                            let jami = parseInt(product.price) * parseInt(soni);
                            alert(`Sizdan ${jami.toLocaleString()} so'm bo‘ldi ✅`);
                            break;
                        default:
                            alert("Iltimos, to‘g‘ri son kiriting 😡");
                            break;
                    }
                    break;
                case false:
                    alert("Zakaz bekor qilindi ❌");
                    break;
            }
        };

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(btn);
        app.appendChild(card);
    });
} else {
    alert("Xatolik: #app elementi topilmadi.");
}

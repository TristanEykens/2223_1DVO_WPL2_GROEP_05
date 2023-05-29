let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, desc, img } = x;
            let search = basket.find((x) => x.id === id) || [];
            return `
    <div id=product-id-${id} class="item">
    <img width="220" height="220" src=${img} alt="">
        <div class="details">
            <h3>${name}</h3>
            <p class="DescriptionParagraph">${desc}</p>
            <div class="price-quantity">
                <h2>€ ${price} </h2>
                <div class="buttons">
                    <button onclick="decrement(${id})" class="bi bi-dash-lg"></button>
                    <div id=${id} class="quantity" type="text">
                        ${search.item === undefined ? 0 : search.item}
                    </div>
                    <button onclick="increment(${id})" class="bi bi-plus-lg"></button>
                    <button onclick="push()">voeg toe</button>
                </div>
            </div>
        </div>
</div>
</div>
    `;
        })
        .join(""));
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }

    update(selectedItem.id);
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

let push = () => {
    localStorage.setItem("data", JSON.stringify(basket));
    calculation();
}

calculation();
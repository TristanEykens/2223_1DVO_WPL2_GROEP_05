let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
    if (basket.length !== 0) {
        return (ShoppingCart.innerHTML = basket
            .map((x) => {
                let { id, item } = x;
                let search = shopItemsData.find((y) => y.id === id) || [];
                return `
      <div class="cart-item">
        <div class="col-md-2">
          <img width="100" src=${search.img} alt="" class="img-thumbnail">
        </div>
        <div class="col-md-10 cart-item-details">
          <div class="row align-items-center">
            <div class="col-md-8">
              <h3 class="text-orange">${search.name}</h3>
              <div class="quantity-controls">
                <a onclick="removeItem(${id})" class="remove-link mr-2">Verwijder</a>
                <button onclick="decrement(${id})" class="btn btn-orange minus-btn">-</button>
                <span id=${id} class="quantity text-white p-2">${item}</span>
                <button onclick="increment(${id})" class="btn btn-orange plus-btn">+</button>
              </div>
            </div>
            <div class="col-md-4 text-right">
              <div class="text-white h3 product-value">€ ${search.price}</div>
            </div>
          </div>
        </div>
        <hr class="hr-orange">
      </div>
      `;
            })
            .join(""));
    } else {
        ShoppingCart.innerHTML = ``;
        label.innerHTML = `
    <h2 class="list-title">Cart is Empty</h2>
    <a href="ProductenTest.html">
      <button class="HomeBtn">Back to home</button>
    </a>
    `;
    }
};

generateCartItems();

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

    generateCartItems();
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
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
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    TotalAmount();
};

let removeItem = (id) => {
    let selectedItem = id;
    // console.log(selectedItem.id);
    basket = basket.filter((x) => x.id !== selectedItem.id);
    generateCartItems();
    TotalAmount();
    localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
    basket = [];
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};

let TotalAmount = () => {
    if (basket.length !== 0) {
        let amount = basket
            .map((x) => {
                let { item, id } = x;
                let search = shopItemsData.find((y) => y.id === id) || [];

                return item * search.price;
            })
            .reduce((x, y) => x + y, 0);
        // console.log(amount);
        label.innerHTML = `
    <h2 id="total" class="list-title">Totaalbedrag : € ${amount}</h2>
    <button id="OrderBtn" class="checkout">Checkout</button>
    <button onclick="clearCart()" class="removeAll">Clear Cart</button>
    `;
    } else return;
};

TotalAmount();

//clicking the order button will bring you to winkelmand2
document.getElementById('OrderBtn').addEventListener('click', function(){
    window.location.href = './winkelmand2.html'
})
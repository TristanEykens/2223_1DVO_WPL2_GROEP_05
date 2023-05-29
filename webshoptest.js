function incrementValue(){
    var waarde = parseInt(document.getElementById("number").value, 10);
    waarde = isNaN(waarde) ? 0 : waarde;
    waarde++;
    document.getElementById('number').value = waarde;
}

function  decrementValue(){
    var waarde = parseInt(document.getElementById('number').value, 10);
    waarde = isNaN(waarde) ? 0 : waarde;
    if (waarde > 0){
    waarde--;
    }
    document.getElementById('number').value = waarde;
}

function increment() {
    let selectedItem = id;
    let input = document.getElementById('number').value;
    let search = basket.find((x) => x.id === "Pasta1");

    if (search === undefined) {
        basket.push({
            id: "Pasta1",
            item: 1,
        });
    } else {
        search.item += input;
    }

    // console.log(basket);
    update("Pasta1");
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

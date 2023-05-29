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

function addToCart (){
    var input = document.getElementById('number');
    var winkelmandhoeveelheid = parseInt(document.getElementById('cartAmount').textContent);
    var waarde = parseInt((input.value));
    winkelmandhoeveelheid = isNaN(winkelmandhoeveelheid) ? 0 : winkelmandhoeveelheid;
    waarde = isNaN(waarde) ? 0 : waarde;
    winkelmandhoeveelheid += waarde;
    document.getElementById('cartAmount').textContent = winkelmandhoeveelheid;

}

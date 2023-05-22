function incrementValue(){
    var waarde = parseInt(document.getElementById('number').value, 10);
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
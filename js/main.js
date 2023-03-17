//lunches name
let lunch1 = document.getElementById("lunch1");
let lunch2 = document.getElementById("lunch2");
let lunch3 = document.getElementById("lunch3");
// drinks name
let drink1 = document.getElementById("drink1");
let drink2 = document.getElementById("drink2");
let drink3 = document.getElementById("drink3");
//dessert name
let dessert1 = document.getElementById("dessert1");
let dessert2 = document.getElementById("dessert2");
let dessert3 = document.getElementById("dessert3");

// function select food;
function selectFood(food, id) {

    if(food === 1 ) {
        lunch1.style.border = "2px solid green";
        lunch2.style.border = "none";
        lunch3.style.border = "none";
        document.getElementById(id).classList.remove("checkedIconHide");
        document.getElementById('checkedIcon2').classList.add("checkedIconHide");
        document.getElementById('checkedIcon3').classList.add("checkedIconHide");
    } else if(food === 2 ) {
        lunch2.style.border = "2px solid green";
        lunch1.style.border = "none";
        lunch3.style.border = "none";
        document.getElementById(id).classList.remove("checkedIconHide");
        document.getElementById('checkedIcon1').classList.add("checkedIconHide");
        document.getElementById('checkedIcon3').classList.add("checkedIconHide");
        
    } else if(food === 3 ) {
        lunch3.style.border = "2px solid green";
        lunch2.style.border = "none";
        lunch1.style.border = "none";
        document.getElementById(id).classList.remove("checkedIconHide");
        document.getElementById('checkedIcon1').classList.add("checkedIconHide");
        document.getElementById('checkedIcon2').classList.add("checkedIconHide");
    }
};
// function select drink;
function selectDrink(drink, id) {
    if(drink === 1) {
        drink1.style.border = "2px solid green";
        drink2.style.border = "none";
        drink3.style.border = "none";
        document.getElementById(id).classList.remove("checkedIconHide");
        document.getElementById('checkedIcon5').classList.add("checkedIconHide");
        document.getElementById('checkedIcon6').classList.add("checkedIconHide");
    } else if(drink === 2) {
        drink2.style.border = "2px solid green";
        drink1.style.border = "none";
        drink3.style.border = "none";
        document.getElementById(id).classList.remove("checkedIconHide");
        document.getElementById('checkedIcon4').classList.add("checkedIconHide");
        document.getElementById('checkedIcon6').classList.add("checkedIconHide");
    } else if(drink === 3) {
        drink3.style.border = "2px solid green";
        drink2.style.border = "none";
        drink1.style.border = "none";
        document.getElementById(id).classList.remove("checkedIconHide");
        document.getElementById('checkedIcon4').classList.add("checkedIconHide");
        document.getElementById('checkedIcon5').classList.add("checkedIconHide");
    }
};
//function select dessert
function selectDessert(dessert, id) {
    if(dessert === 1) {
        dessert1.style.border = "2px solid green";
        dessert2.style.border = "none";
        dessert3.style.border = "none";
        document.getElementById(id).classList.remove("checkedIconHide");
        document.getElementById('checkedIcon8').classList.add("checkedIconHide");
        document.getElementById('checkedIcon9').classList.add("checkedIconHide");
    } else if(dessert === 2) {
        dessert2.style.border = "2px solid green";
        dessert1.style.border = "none";
        dessert3.style.border = "none";
        document.getElementById(id).classList.remove("checkedIconHide");
        document.getElementById('checkedIcon9').classList.add("checkedIconHide");
        document.getElementById('checkedIcon7').classList.add("checkedIconHide");
    } else if(dessert === 3) {
        dessert3.style.border = "2px solid green";
        dessert2.style.border = "none";
        dessert1.style.border = "none";
        document.getElementById(id).classList.remove("checkedIconHide");
        document.getElementById('checkedIcon7').classList.add("checkedIconHide");
        document.getElementById('checkedIcon8').classList.add("checkedIconHide");
    }
};

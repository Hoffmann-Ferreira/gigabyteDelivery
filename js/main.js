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

//price
let priceLunch = "";
let priceDrink = "";
let priceDessert = "";
let totalOrderAmount = 0;

//select snack
let snackLunch = "";
let snackDrink = "";
let snackDessert = "";

//show close order
let counter = 0;
let keyword1 = "";
let keyword2 = "";
let keyword3 = "";

// function select food;
function selectFood(food, id) {
  counter += 1;
  keyword1 = "ok";
  if (food === 1) {
    lunch1.style.border = "2px solid green";
    lunch2.style.border = "none";
    lunch3.style.border = "none";
    document.getElementById(id).classList.remove("checkedIconHide");
    document.getElementById("checkedIcon2").classList.add("checkedIconHide");
    document.getElementById("checkedIcon3").classList.add("checkedIconHide");
    document
      .getElementById("checkedLunche")
      .classList.remove("selectcheckedIcon");
    snackLunch = document.getElementById("name1").textContent;
    return snackLunch;
  } else if (food === 2) {
    lunch2.style.border = "2px solid green";
    lunch1.style.border = "none";
    lunch3.style.border = "none";
    document.getElementById(id).classList.remove("checkedIconHide");
    document.getElementById("checkedIcon1").classList.add("checkedIconHide");
    document.getElementById("checkedIcon3").classList.add("checkedIconHide");
    document
      .getElementById("checkedLunche")
      .classList.remove("selectcheckedIcon");
    snackLunch = document.getElementById("name2").textContent;
    return snackLunch;
  } else if (food === 3) {
    lunch3.style.border = "2px solid green";
    lunch2.style.border = "none";
    lunch1.style.border = "none";
    document.getElementById(id).classList.remove("checkedIconHide");
    document.getElementById("checkedIcon1").classList.add("checkedIconHide");
    document.getElementById("checkedIcon2").classList.add("checkedIconHide");
    document
      .getElementById("checkedLunche")
      .classList.remove("selectcheckedIcon");
    snackLunch = document.getElementById("name3").textContent;
    return snackLunch;
  }
}
// function select drink;
function selectDrink(drink, id) {
  counter += 1;
  keyword2 = "ok";
  if (drink === 1) {
    drink1.style.border = "2px solid green";
    drink2.style.border = "none";
    drink3.style.border = "none";
    document.getElementById(id).classList.remove("checkedIconHide");
    document.getElementById("checkedIcon5").classList.add("checkedIconHide");
    document.getElementById("checkedIcon6").classList.add("checkedIconHide");
    document
      .getElementById("checkedDrink")
      .classList.remove("selectcheckedIcon");
    snackDrink = document.getElementById("name4").textContent;
    return selectDrink;
  } else if (drink === 2) {
    drink2.style.border = "2px solid green";
    drink1.style.border = "none";
    drink3.style.border = "none";
    document.getElementById(id).classList.remove("checkedIconHide");
    document.getElementById("checkedIcon4").classList.add("checkedIconHide");
    document.getElementById("checkedIcon6").classList.add("checkedIconHide");
    document
      .getElementById("checkedDrink")
      .classList.remove("selectcheckedIcon");
    snackDrink = document.getElementById("name5").textContent;
    return selectDrink;
  } else if (drink === 3) {
    drink3.style.border = "2px solid green";
    drink2.style.border = "none";
    drink1.style.border = "none";
    document.getElementById(id).classList.remove("checkedIconHide");
    document.getElementById("checkedIcon4").classList.add("checkedIconHide");
    document.getElementById("checkedIcon5").classList.add("checkedIconHide");
    document
      .getElementById("checkedDrink")
      .classList.remove("selectcheckedIcon");
    snackDrink = document.getElementById("name6").textContent;
    return snackDrink;
  }
}
//function select dessert
function selectDessert(dessert, id) {
  counter += 1;
  keyword3 = "ok";
  if (dessert === 1) {
    dessert1.style.border = "2px solid green";
    dessert2.style.border = "none";
    dessert3.style.border = "none";
    document.getElementById(id).classList.remove("checkedIconHide");
    document.getElementById("checkedIcon8").classList.add("checkedIconHide");
    document.getElementById("checkedIcon9").classList.add("checkedIconHide");
    document
      .getElementById("checkedDessert")
      .classList.remove("selectcheckedIcon");
    snackDessert = document.getElementById("name7").textContent;
    return snackDessert;
  } else if (dessert === 2) {
    dessert2.style.border = "2px solid green";
    dessert1.style.border = "none";
    dessert3.style.border = "none";
    document.getElementById(id).classList.remove("checkedIconHide");
    document.getElementById("checkedIcon9").classList.add("checkedIconHide");
    document.getElementById("checkedIcon7").classList.add("checkedIconHide");
    document
      .getElementById("checkedDessert")
      .classList.remove("selectcheckedIcon");
    snackDessert = document.getElementById("name8").textContent;
    return snackDessert;
  } else if (dessert === 3) {
    dessert3.style.border = "2px solid green";
    dessert2.style.border = "none";
    dessert1.style.border = "none";
    document.getElementById(id).classList.remove("checkedIconHide");
    document.getElementById("checkedIcon7").classList.add("checkedIconHide");
    document.getElementById("checkedIcon8").classList.add("checkedIconHide");
    document
      .getElementById("checkedDessert")
      .classList.remove("selectcheckedIcon");
    snackDessert = document.getElementById("name9").textContent;
    return snackDessert;
  }
}

//function add price

function addPriceFood(food) {
  priceLunch = document.getElementById(food).textContent;
  let price = priceLunch.replace("R$ ", "").replace(",", ".");
  price = parseFloat(price);
  priceLunch = price;
  return priceLunch;
}

function addPriceDrink(drink) {
  priceDrink = document.getElementById(drink).textContent;
  let price = priceDrink.replace("R$ ", "").replace(",", ".");
  price = parseFloat(price);
  priceDrink = price;
  return priceDrink;
}

function addPriceDessert(dessert) {
  priceDessert = document.getElementById(dessert).textContent;
  let price = priceDessert.replace("R$ ", "").replace(",", ".");
  price = parseFloat(price);
  priceDessert = price;
  return priceDessert;
}
//function sum prices

function sumPrices() {
  totalOrderAmount = priceLunch + priceDrink + priceDessert;
  console.log(totalOrderAmount);
  return totalOrderAmount;
}

//function closed order
function modalOrder() {
  if (
    counter >= 3 &&
    keyword1 === "ok" &&
    keyword2 === "ok" &&
    keyword3 === "ok"
  ) {
    let modal = document.getElementById("modalOrder");
    modal.innerHTML = `<button onclick="modalCloseOder()">Fechar pedido</button>`;
  }
}

function modalCloseOder() {
  sumPrices();
  document.getElementById(
    "snackOrder"
  ).innerHTML = `<div class="modalCloseOrder">
  <div class="modalConfirmOrder">
    <h2> Confirmar pedido</h2>
    <p>${snackLunch}      R$:${priceLunch}</p>
    <p>${snackDrink}      R$:${priceDrink}</p> 
    <p>${snackDessert}    R$:${priceDessert}</p> 
    <p>Total      R$:${totalOrderAmount}</p>
    <div class="buttonContainer">
    <button onclick="closedOder()">Confirmar</button> <button class="toGiveUp" onclick="hideModalOrder()">Cancelar</button>
    </div>   
  </div>
</div>`;
}

//function finish order
function closedOder() {
  let name = prompt("Informe seu nome: ");
  let adress = prompt("Informe seu endereço de entrega: ");
  let mensagem;

  mensagem = ` Olá, meu nome é ${name}, gostaria de fazer o seguinte pedido:
  Lanche: ${snackLunch}, no valor de R$:${priceLunch};
  Bebida: ${snackDrink}, no valor de R$:${priceDrink};
  Sobremesa: ${snackDessert}, no valor de R$:${priceDessert};
  O valor total do meu pedido foi R${totalOrderAmount};
  O endereço de entrega é ${adress}.
  `;

  window.open("https://wa.me/5532984179500?text=" + encodeURI(mensagem));
}

function hideModalOrder() {
  setTimeout(function () {
    window.location.reload();
  }, 1000);
}

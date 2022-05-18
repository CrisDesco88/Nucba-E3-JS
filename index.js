const getPizzaBtn = document.getElementById('get-pizza-btn');
const idInputEl = document.getElementById('pizza-id');
const pizzaName = document.getElementById('name');
const pizzaPrice = document.getElementById('price');

async function getPizza() {
    let response = await fetch('pizzas.json');
    let pizzas = await response.json();
    renderPizzaHtml(pizzas)
}

function renderPizzaHtml(pizzas){
    let choosenPizza = pizzas.filter(pizza => pizza.id == idInputEl.value)
    try {
        if(choosenPizza){
            pizzaName.innerText = `🍕​ Variedad: ${choosenPizza[0].nombre}`;
            pizzaPrice.innerText = `​💰​ Precio: $ ${choosenPizza[0].precio}`;
        } 
    } catch (error){
        pizzaName.innerText = "Lo sentimos pero no tenemos esa pizza...​😅​";
        pizzaPrice.innerText = "";
    }
}

getPizzaBtn.addEventListener("click", getPizza)
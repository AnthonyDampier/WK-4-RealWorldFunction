console.log("LET'S GO SHOPPING");

let fridge = {name:"Ourfridge", capacity: [1,2], maxCapacity: 5};

let shoppingList = [];

function doWeNeedFood(){
    // if doesFridgeNeedFilled return true, then run constructShopping list
    if (fridge.capacity.length <= (fridge.maxCapacity * .5)){
        console.log("Fridge is less than half capacity of max capacity");
        console.log("We don't have enough food in the fridge...");
        return true;
    } else {
        console.log("We have enough food in the fridge.");
        return false;
    }
}

function makeShoppingList(){
    let spaceInFridge = fridge.maxCapacity - fridge.capacity.length;
    console.log(spaceInFridge);
    for (let i = 1; i <=spaceInFridge; i++){
        // create a random number (0-9)
        shoppingList.push(Math.floor(Math.random()*10));
        console.log(shoppingList);
    }
}
function goShopping(){
    let shoppingCart = [];
    while (shoppingList !== 0){
        shoppingCart[shoppingCart.length] = shoppingList.pop();
        console.log(shoppingCart);
        console.log(shoppingList);
    }
}

function keepOurFridgeFull(){
    // If we need food; then make a shopping list and go shopping
    if (doWeNeedFood() === true){
        console.log("Let's make a shopping list");
        makeShoppingList();
        console.log("Go shoppinf!");
        goShopping();
    }
}

keepOurFridgeFull();
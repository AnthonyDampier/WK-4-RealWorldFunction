console.log("LET'S GO SHOPPING\n___________________");

let fridge = {name:"our fridge", capacity: [1,2,3,4,5,6], maxCapacity: 5};
let shoppingList = [];
let groceries = [];

function doWeNeedFood(){
    // if doesFridgeNeedFilled return true, then run constructShopping list
    if (fridge.capacity.length <= (fridge.maxCapacity * .5)){
        console.log("Fridge is less than half capacity of max capacity with only:", fridge.capacity.length, "of", fridge.maxCapacity,"spaces filled.");
        console.log("We don't have enough food in", fridge.name, "...");
        return true;
    } else if (fridge.capacity.length > (fridge.maxCapacity )){
        console.log(fridge.name, "is over capacity with only:", fridge.capacity.length, "of", fridge.maxCapacity,"spaces filled.",fridge.name," MIGHT EXPLODE!!!");
        return false;
    } else {
        console.log("We have enough food in",fridge.name,"with only:", fridge.capacity.length, "of", fridge.maxCapacity,"spaces filled.");
        return false;
    }
}

function makeShoppingList(){
    let spaceInFridge = fridge.maxCapacity - fridge.capacity.length;
    //console.log(spaceInFridge);
    for (let i = 1; i <=spaceInFridge; i++){
        // create a random number (0-9).
        shoppingList.push(Math.floor(Math.random()*10));
    }
    console.log("We wrote",shoppingList,"on our shopping list.");
}

function goShopping(){
    let shoppingCart = [];
    // transfers items in shoppinglist to shoppingCart
    while (shoppingList != 0){
        shoppingCart[shoppingCart.length] = shoppingList.pop();
        //console.log(shoppingCart);
        //console.log(shoppingList);
        console.log("We places", shoppingCart[shoppingCart.length-1],"in our shopping cart.");
    }
    groceries = shoppingCart;
    shoppingCart = [];
    //console.log(shoppingCart);
    //console.log(groceries);
}

function checkoutAndPutInFridge(){
    while (groceries.length !== 0){
        //console.log(groceries);
        //console.log(fridge.capacity);
        console.log("We put",groceries[groceries.length-1],"groceries into", fridge.name,".");
        fridge.capacity[fridge.capacity.length] = groceries.pop();
    }
    console.log("We have", fridge.capacity, "in our fridge.");
}

function keepOurFridgeFull(){
    // If we need food; then make a shopping list and go shopping
    if (doWeNeedFood() === true){
        console.log("Let's make a shopping list");
        makeShoppingList();
        console.log("Let's go shopping!");
        goShopping();
        console.log("let's fill our fridge with groceries!");
        checkoutAndPutInFridge();
    }
}

function checkTheFridge(){
    console.log()
}

keepOurFridgeFull();
console.log("---------------------")
fridge = {name:"Our fridge", capacity: [1,2,3,4], maxCapacity: 5};
keepOurFridgeFull();
console.log("---------------------")
fridge = {name:"Our fridge", capacity: [1,2], maxCapacity: 5};
keepOurFridgeFull();
console.log("---------------------")
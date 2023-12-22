// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities
// using the splice method. Print the cart's contents after each operation

type CartItem = string | number | {"name": string, "quantity": number}

let shoppingCart: CartItem[] = []

// Add Items
const addItems = (itemArr: CartItem[], item: CartItem) => {

    if (itemArr.length !== 0) {
        itemArr.splice(itemArr.length - 1, 0, item)
        return console.log(itemArr);
    }
    itemArr.splice(0, 0, item)
    return console.log(itemArr);

}

addItems(shoppingCart, "orange")
addItems(shoppingCart, "grapefruit")

// Remove Items
const removeItems = (itemArr: CartItem[], item: CartItem) => {

    if (itemArr.length !== 0) {
        itemArr.splice(itemArr.indexOf(item), 1)
        return console.log(itemArr);
    }
    return console.log("Nothing to delete. The Cart is empty");

}

removeItems(shoppingCart, "grapefruit")

// Update Items
const updateItems = (itemArr: CartItem[], item: CartItem, updateWith: CartItem) => {

    if (itemArr.length !== 0) {
        if (itemArr.indexOf(item) < 0) {
            return console.log(`No item exists named "${item}"`);
        }
        itemArr.splice(itemArr.indexOf(item), 1, updateWith)
        return console.log(itemArr);
    }
    return console.log("Nothing to delete. The Cart is empty");

}

updateItems(shoppingCart, "orange", "banana")
function solve(store, order){

    let obj = {};

    for(let i = 0; i < store.length; i+= 2){
        let currentProduct = store[i];
        let quantity = store[i+1];
        obj[currentProduct] = Number(quantity);
    }

    for(let i = 0; i < order.length; i+= 2){
        let currentProduct = order[i];
        let quantity = order[i+1];
        quantity = Number(quantity)

        if(!obj[currentProduct]){
            obj[currentProduct] = quantity;
        }else{
            let existing = obj[currentProduct];
            obj[currentProduct] = existing += quantity;
        }
    }


let enries = Object.entries(obj);

for (const [product, count] of enries) {
    console.log(product, '->', count)
    
}
// create a obj with a currents products

// add the order and if product from order contain in obj quntity++;

// print


}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )
console.log("---");
solve([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    )
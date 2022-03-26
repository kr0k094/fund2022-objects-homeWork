function solve(input) {

let arr = [];

for(let line of input){
    let [product, price] = line.split(" : ");
    let obj = {
        product,
        price,
    };
    arr.push(obj);
}

let sorted = arr.sort((a, b)=> a.product.localeCompare(b.product));

let currentLetter = "";

for(let obj of sorted) {
    if(obj.product.charAt(0).toUpperCase() == currentLetter){
        console.log(`${obj.product}: ${obj.price}`);
    }else{
        
        currentLetter = obj.product.charAt(0).toUpperCase();
        console.log(currentLetter);
        console.log(`${obj.product}: ${obj.price}`);

    }
}




}
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )
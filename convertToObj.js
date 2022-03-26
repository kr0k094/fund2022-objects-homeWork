function solve(JSONfile){

let obj = JSON.parse(JSONfile);
let keys = Object.keys(obj);

for (const key of keys) {
    
    console.log(`${key}: ${obj[key]}`);
}


}
solve('{"name": "George", "age": 40, "town": "Sofia"}')
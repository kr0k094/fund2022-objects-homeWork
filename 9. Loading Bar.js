function  loadingBar(number){

let bar = new Array(10).fill(".");

for(let i = 0; i < number / 10;i++){
    bar[i] = "%";
}

bar = bar.join("");


if(number == 100){
    console.log("100% Complete!");
    console.log(`[${bar}]`);
}else{
    console.log(`${number}% [${bar}]`);
    console.log("Still loading...");
}

}
loadingBar()
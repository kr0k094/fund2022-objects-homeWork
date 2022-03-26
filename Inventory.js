function solve(input) {

    let heros = [];


for (const line of input) {
    let [hero, level, items] = line.split(' / ');
            let obj = {
                hero,
                level,
                items
            };

            heros.push(obj)

    }

    let sorted = heros.sort((a,b)=> a.level - b.level);

    for (const obj of sorted) {
        console.log(`Hero: ${obj.hero}`);
        console.log(`level => ${obj.level}`);
        console.log(`items => ${obj.items} `);
    }
  


}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )
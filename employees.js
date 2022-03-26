function solve(input){

    let employees = [];

class Employee{

constructor(name, personalNumber){
    this.name = name;
    this.personalNumber = personalNumber;
}

}

input.forEach((i)=> {
    let name = i;
    let number = i.length;

    employees.push(new Employee(name, number));
})

employees.forEach((i)=> {
    console.log(`Name: ${i.name} -- Personal Number: ${i.personalNumber}`);
})


}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
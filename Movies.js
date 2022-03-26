function solve(arr){

let movies = {};

for (const line of arr) {
    let tokens = line.split(" ");

    if(tokens.includes("addMovie")){
        
        tokens.shift();
        let film =  tokens.join(" ");
        movies[film] = {name: film};   
    }
    if(tokens.includes('directedBy')){
        
        let index = tokens.indexOf("directedBy");
        let film = tokens.splice(0, index).join(" ");
        tokens.shift();
        let director = tokens.join(" ");

        if(movies[film]){
            movies[film]["director"] = director;
        }
        
    }
    if(tokens.includes("onDate")){
        let index = tokens.indexOf("onDate");
        let film = tokens.splice(0, index).join(" ");
        let date = tokens.slice(-1).join("");

        if(movies[film]){
            movies[film]["date"] = date;
        }
    }

        
    }   

    for(let movieName in movies){
        let movie = movies[movieName];

        if(movie.hasOwnProperty("name")&& movie.hasOwnProperty("director") && movie.hasOwnProperty("date"))
        console.log(JSON.stringify(movie));


    }

}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )
    console.log('--------')
solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    )
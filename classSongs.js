function solve(input){
let songs = [];
let songsCount = input.shift();
let typeList = input.pop();

class Song{

constructor(type, name, time){
    this.type = type;
    this.name = name;
    this.time = time;
}

}

input.forEach(element => {
    let [type, name, time] = element.split("_");

    songs.push(new Song(type, name, time));
});

if(typeList == "all"){
    songs.forEach((i)=>{
        console.log(i.name);
    })
}else{
    let filtered = songs.filter((i)=> i.type == typeList);
    filtered.forEach((i)=>{
        console.log(i.name);
    })
}


}
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )

    solve([2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all']
        )
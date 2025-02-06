const allUsers= [{
    firstName: "Aniketh",
    age: 19,
},{
    firstName:"Alex",
    age: 20,
}, {
    firstName: "Ayush",
    age :18,
}
]

for (let i =0 ; i<allUsers.length; i++){
    if (allUsers[i]["age"]>=15){
        console.log(allUsers[i]["firstName"])
    }
}
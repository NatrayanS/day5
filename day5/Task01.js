console.log("JSON iterate over all for loops(for,for in,for of,forEach).");

/*  01. for loop,
    02. for in loop,
    03. for of loop,
    04. forEach loop*/

console.log("01. for loop");

let stateAndCapital=[{"State":"TamilNadu", "Capital":"Chennai"},
                    {"State":"Kerala","Capital":"Thiruvananthapuram"},
                    {"State":"Karnataka","Capital":"Bengaluru"}];
    for(let i = 0; i < stateAndCapital.length; i++){
        console.log(`State Name - ${stateAndCapital[i].State} and Capital Name - ${stateAndCapital[i].Capital}`);
    };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("02. for in loop");

let fsdSylabus= [{"FrontEnd":"HTML,CSS,JavaScript,React Js,Angular Js"},
                {"BackEnd": "JavaScript, PHP,Python,SQL"}];

for(let sys in fsdSylabus){
    console.log(sys, fsdSylabus[sys]);
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("03. for of loop");

let goldAndSilver=[{"pro":"gold" ,"price" : "5847"},{"pro":"silver" ,"price" : "77.5"}];
for(let price of goldAndSilver){
    price += 10;
    console.log(goldAndSilver);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("04. forEach loop");

let GaS=[{"pro":"gold" ,"price" : "5847"},{"pro":"silver" ,"price" : "77.5"}]

GaS.forEach(i=> 
    console.log(i));

/*document.getElementById("myH1").textContent='New worfs'


let age =100;
console.log(`I am ${age}`);
window.alert(`Hello ${age} year old man`);
*/

//Accept user input 
/*
let username;

username=window.prompt("What's your username?");
console.log(`Your username is ${username}`);
*/
//Window prompt --> ask for the content directly 
/*
let username;
document.getElementById("myButton").onclick = function (){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("welMessage").textContent=`Hello ${username}`;
}*/

//.content --> normal tag content
//.value --> retrieve the tag values

//const --> variable that you cant change


const PI = 3.14
let radius;
let circumference;
//radius = window.prompt('Enter the radius of the circle');
//raidus = Number(radius);
//circumference = 2*pi*raidus;
//console.log(circumference)


document.getElementById("myButton2").onclick = function (){
    radius = Number(document.getElementById("radiusInput").value);
    circumference = 2*PI*radius;
    document.getElementById("myH2").textContent=`Your circle circumference is ${circumference}`;
}



let agreement = confirm("r u wanna take a opium test")
let agreement2 = confirm("r u suree????")
let agreement3 = confirm("are you sure about this?")
let agreement4 = confirm("u r lame asss")
let agreement5 = confirm("fuck off, k, lesssgoooo")

if (agreement === true) {
    alert("welcome to the opium test")
}
else {
    //..........
}

let positivePoints = 0;
let negetivePoints = 0;
let qustion =   [prompt("u love opium?"),
                prompt("What year was the single released @MEH?"),
                prompt("How much higher is Carti than Uzi?"),
                prompt("How many people are in the opium label?"),
                prompt("What is the name of Playboi Carti's son?"),
                prompt('Which track from the album "Whole Lotta Red" had a video released first?',
                prompt("Karti's year of birth"),
                prompt("Did Karti have a joint album with Young Thug?"),
                prompt("Everyone knows the former pseudonym of Karti"),
                prompt("boira is opium?","suuuuurrrreeeeeee"))]

if (qustion[0] === "yes") {
    positivePoints += 1
} 
else {
    negetivePoints += 1;
}
if (qustion[1] == "2017") {
    positivePoints += 1
}
else {
    negetivePoints += 1;
}
if (qustion[2] == "25") {
    positivePoints += 1
}
else {
    negetivePoints += 1;
}
if (qustion[3] == "4") {
    positivePoints += 1
}
else {
    negetivePoints += 1;
}
if (qustion[4] == "playboi carti") {
    positivePoints += 1
}
else {
    negetivePoints += 1;
}
if (qustion[5] == "onyx kelly") {
    positivePoints += 1
}
else {
    negetivePoints += 1;
}
if (qustion[6] == "m3tamorphosis") {
    positivePoints += 1
}
else {
    negetivePoints += 1;
}

if (qustion[7] == "13.9.1996") {
    positivePoints += 1
}
else {
    negetivePoints += 1;
}
if (qustion[8] == "no") {
    positivePoints += 1
}
else {
    negetivePoints += 1;
}
if (qustion[9] == "sir cartier") {
    positivePoints += 1
}
else {
    negetivePoints += 1;
}
if (qustion[10] == "sure") {
    positivePoints += 1
}
else {
    negetivePoints += 1;
}
if (positivePoints > negetivePoints) {
    alert("u r opium <3")
}
else {
    alert("u r not opium, u r lame")
}
alert(positivePoints)
alert(negetivePoints)
console.log(qustion)
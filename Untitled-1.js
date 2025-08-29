// For Loop → fixed number
for (let i = 1; i <= 5; i++) {
  console.log("Plate " + i);
}

// While Loop → until condition is false
let linda = 3;
while (linda > 0) {
  console.log("COntrolled linda");
  plates--;
}

// Do...While Loop → run once, then check
let cups = 0;
do {
  console.log("Tried washing a cup");
  cups--;
} while (cups > 0);

// For...of Loop → each item in a list
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log("Eating " + fruit);
}
//For → I know how many times.

//While → I don’t know, keep going.

//Do...While → At least once.

//For...of → Go through items in a list.

let names = ["peter", "Anita", "James"];

//DRY 
for (let i = 0; i < 10; i = i + 1){
  console.log(names[i])
}


let age = 25;

if(age >= 18 && age <= 30){
  console.log("You are a young adult")
}

else if(age >= 26 && age <= 35){
    console.log("you are a youthful adult")
}




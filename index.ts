let guests :string[] = ["idrees" , "Usama" , "Ahmed ali" ];
console.log("Great news! I found a bigger Dinner table!");

//Adding More GUests 
guests.unshift("Zohaib");
guests.splice(guests.length /2,0, "Hammad Rana");


guests.forEach(guest => {
    console.log (`Dear ${guest}, Would you like to join me for Dinner `);
})



//Question No 17

console.log("Unfortunately , I can only invite two people for Dinner.");
while (guests.length > 2 ){
    let removedGuest = guests.pop();
    console.log(`Sorry ,${removedGuest} , I can't invite you to dinner.`);
}  
guests.forEach(guest => {
    console.log (`Dear ${guest}, you're still invited to Dinner.`);
});
guests.splice(0,
    guests.length);
console.log(guests); 

//Question No 18

let places: string[] = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);

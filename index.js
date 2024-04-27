var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guests = ["idrees", "Usama", "Ahmed ali"];
console.log("Great news! I found a bigger Dinner table!");
//Adding More GUests 
guests.unshift("Zohaib");
guests.splice(guests.length / 2, 0, "Hammad Rana");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", Would you like to join me for Dinner "));
});
//Question No 17
console.log("Unfortunately , I can only invite two people for Dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry ,".concat(removedGuest, " , I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to Dinner."));
});
guests.splice(0, guests.length);
console.log(guests);
//Question No 18
var places = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);

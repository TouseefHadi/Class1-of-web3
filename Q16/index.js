"use strict";
let inviteee = ["Qadir", "Ahmad", "Ali", "Khan"];
for (let i = 0; i <= 3; i++) {
    console.log("I would like to invite Mr", inviteee[i], "For dinner");
}
let can_guest = inviteee[0];
let rep_guest = "Kamran";
inviteee[0] = rep_guest;
console.log("Due to some issues Mr", can_guest, "is not present here so we are inviting", rep_guest, "insted");
console.log("\nNow the new list is here: ");
for (let i = 0; i <= 3; i++) {
    let guests = inviteee[i];
    console.log("Dear guest Mr", guests, "For dinner");
}
console.log("Now here is more space availabe for the guest and i am going to add the three guest!");
//Now addidng touseef at the beginning of the array and printing the new array
let index_to_add_at = 0;
let add_name = "Touseef";
inviteee.splice(index_to_add_at, 0, add_name);
for (let i = 0; i <= 4; i++) {
    let guest = inviteee[i];
    console.log("Dear guest Mr", guest, "For dinner");
}
console.log("\n\n");
//now lets add some new person Laiba at the middlw of the array
let index_to_add_at_middle = 3;
let add_name_at_middle = "Laiba";
inviteee.splice(index_to_add_at_middle, 0, add_name_at_middle);
for (let i = 0; i <= 5; i++) {
    let middle_add = inviteee[i];
    console.log("Dear guest Mr", middle_add, "For dinner");
}
console.log("\n\n");
//now lets add some new person uzair at the End of the array
let index_to_add_at_End = 6;
let add_name_at_End = "uzair";
inviteee.splice(index_to_add_at_End, 0, add_name_at_End);
for (let i = 0; i <= 6; i++) {
    let End_add = inviteee[i];
    console.log("Dear guest Mr", End_add, "For dinner");
}

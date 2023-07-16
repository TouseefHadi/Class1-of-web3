let invitee: string[] = ["Qadir", "Ahmad", "Ali", "Khan"];
for (let i=0; i<=3; i++)
{
    console.log("I would like to invite Mr",invitee[i],"For dinner");
}

let cancel_guest: string = invitee[0];
let replace_guest: string ="Kamran";
invitee[0]=replace_guest;
console.log("Due to some issues Mr",cancel_guest,"is not present here so we are inviting", replace_guest, "insted");
console.log("\nNow the new list is here: ");

for (let i=0; i<=3; i++)
{
   let guest = invitee[i];
    console.log("Dear guest Mr",guest,"For dinner");
}
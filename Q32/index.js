"use strict";
const currentUsers = ["alice", "bob", "charlie", "david", "emma"];
const newUsers = ["emma", "frank", "harry", "alice", "james"];
for (let newUser of newUsers) {
    // Convert the new username and current usernames to lowercase for case-insensitive comparison
    const lowerNewUser = newUser.toLowerCase();
    const lowerCurrentUsers = currentUsers.map(user => user.toLowerCase());
    if (lowerCurrentUsers.includes(lowerNewUser)) {
        console.log(`The username '${newUser}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username '${newUser}' is available.`);
    }
}

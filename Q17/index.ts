let guests: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
console.log("You can invite only two people for dinner.");

while (guests.length > 2) {
  const removedGuest: string | undefined = guests.pop();
  if (removedGuest) {
    console.log(`Sorry, ${removedGuest}, but I can't invite you to dinner.`);
  }
}

for (const remainingGuest of guests) {
  console.log(`${remainingGuest}, you're still invited to dinner.`);
}

guests = [];
console.log(guests);

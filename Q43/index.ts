function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function makeGreat(magicians: string[]): string[] {
    const modifiedMagicians: string[] = [];
  
    for (let magician of magicians) {
      modifiedMagicians.push(`the Great ${magician}`);
    }
  
    return modifiedMagicians;
  }
  
  // Creating an array of magician names
  const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
  // Calling the function to make the magicians great and store the modified names in a new array
  const modifiedMagicians: string[] = makeGreat([...magicians]);
  
  // Calling the function to show the original magicians
  showMagicians(magicians);
  
  console.log("---------");
  
  // Calling the function to show the modified magicians
  showMagicians(modifiedMagicians);
  
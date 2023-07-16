function makeAlbum(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    const album: { artist: string, title: string, tracks?: number } = {
      artist,
      title
    };
  
    if (tracks) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Calling the function to create three album objects
  const album1 = makeAlbum("Taylor Swift", "Fearless");
  const album2 = makeAlbum("Ed Sheeran", "Divide", 16);
  const album3 = makeAlbum("Beyoncé", "Lemonade", 12);
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
  
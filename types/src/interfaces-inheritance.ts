export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Entity {
  readonly id: number;
  title: string;
}

interface Album extends Entity{
  description: string;
}

interface Picture extends Album{
  orientation: PhotoOrientation
}

const album: Album = {
  id: 10,
  title: "First Album",
  description: "Hello this is my first album"
}

const picture: Picture = {
  id: 1,
  title: "Family",
  description: "My Family Album",
  orientation: PhotoOrientation.Landscape,
} 

let newPicture = {} as Picture;
newPicture.title = "Picture"

console.log(picture, album, newPicture);


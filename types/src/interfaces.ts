export {}
// Function Show Photo

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Picture {
  title: string, 
  date: string, 
  orientation: 
  PhotoOrientation 
}

function showPicture(picture: Picture) {
  console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`)
}

let myImage = {
  title: "Test",
  date: "2020-03",
  orientation: PhotoOrientation.Square
}

showPicture(myImage);
showPicture({title: "Hello", date: "2020-06", orientation: PhotoOrientation.Landscape})
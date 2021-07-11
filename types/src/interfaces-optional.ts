export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}


interface PictureConfig {
  title?: string,
  date?: string,
  orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig){
  const pic = {title: "Default", date: "2021-03"};
  if(config.title){
    pic.title = config.title
  }

  if(config.date){
    pic.date = config.date
  }

  return pic
}

let myImage = {
  title: "Test",
  date: "2020-03",
  orientation: PhotoOrientation.Square
}

generatePicture({})

interface User {
  readonly id: number;
  firstName: string;
  isPro: boolean;
}

let user: User;
user = {id: 10, firstName: "Arnold", isPro: true}
user.firstName = "Ernesto";
// user.id = 30;
console.log("user", user);

export  {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

// get and set

class Picture {
  #_id: number;
  public title: string;
  public orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation){
    this.#_id = id;
    this.title = title;
    this.orientation = orientation;
  }

  get id() {
    return this.#_id
  }

  set id(id: number) {
    this.#_id = id
  }

  toString() {
    return `[id: ${this.#_id}, title: ${this.title}, orientation: ${this.orientation}]`
  }
}

class Album {
  #_id: number;
  public title: string;
  public pictures: Picture[];

  constructor(id: number, title: string){
    this.#_id = id;
    this.title  = title;
    this.pictures = []
  }

  get id(){
    return this.#_id
  }

  set id(id: number){
    this.#_id = id
  }

  public addPicture(picture: Picture){
    this.pictures.push(picture)
  }
}

const album: Album = new Album(1, "Family");
const picture: Picture = new Picture(1, "House", PhotoOrientation.Portrait);
album.addPicture(picture);
console.log("album", album);


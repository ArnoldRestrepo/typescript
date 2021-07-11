export  {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

// Superclase
abstract class Item  {
  protected readonly _id: number;
  protected title: string;
  
  constructor(id: number, title: string){
    this._id = id;
    this.title = title;
  }

  get id() {
    return this._id
  }

  // set id(id: number) {
  //   this._id = id
  // }

}

class Picture extends Item {
  public static photoOrientation = PhotoOrientation;
  public orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation){
    super(id, title)
    this.orientation = orientation;
  }

  toString() {
    return `[id: ${this._id}, title: ${this.title}, orientation: ${this.orientation}]`
  }
}

class Album extends Item {
  public pictures: Picture[];

  constructor(id: number, title: string){
    super(id, title)
    this.pictures = []
  }
  public addPicture(picture: Picture){
    this.pictures.push(picture)
  }
}

const album: Album = new Album(1, "Family")
const picture: Picture = new Picture(1, "House", PhotoOrientation.Portrait);
album.addPicture(picture);
console.log("Album", album)

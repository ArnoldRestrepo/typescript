// Photo Orientation
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
  Landscape = 1920,
  Portrait = 1080,
  Square = 1080,
  Panorama = 2580
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;

console.log("Landscape", landscape)

enum Country{
  Bolivia = "BOL",
  Colombia = "COL",
  Brasil = "BRA",
  Espana = "ESP",
}

console.log("Country", Country.Colombia);

// Usos: Colores, Días, Meses, etc

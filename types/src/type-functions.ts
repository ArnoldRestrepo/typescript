// Crear una fotografía

// X Error
// function createPicture(title, date, size) {
//   title
// }

type SquareSize = "100x100" | "500x500" | "1000x1000"

interface PropsCreatePicture {
  title?: string,
  data?: string,
  size: SquareSize
}

function createPicture({ title, data, size }: PropsCreatePicture) {
  // Create the picture
  console.log("createPicture using", title, data, size)
}

const picture = ["Title", "Data", "100x100"]

createPicture({ title: "arnold", size: "1000x1000" })


type carType = "QP" | "Hashback" | "4x4" | "4x2";

interface PropsCustomCar {
  color: string,
  type: carType,
  height?: number,
  width?: number,
  accesories?: object,
  model: string
}

let customCar = ({ color, type, height, width, accesories, model }: PropsCustomCar) => {
  return {
    color,
    type,
    height,
    width,
    accesories,
    model
  }
}

const mazda6 = customCar({ color: "Red", type: "QP", height: 300, width: 500, accesories: ["windows", "x", "y", "z"], model: "2020" })
console.log("Mazda6", mazda6);

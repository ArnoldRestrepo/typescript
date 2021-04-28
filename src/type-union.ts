export default {};

// User Identify; 10, '10'

let uuid: number | string;
uuid = 10;
uuid = "10"

// Search User for ID

function getUserNameById(id: number | string) {
  // Bussines Logic
  return "Example"
}

getUserNameById(20);

// Alies Types
type PhoneNumber = number | string;
let phone: PhoneNumber;
phone = 10123;
phone = "101231"

// Search User for ID

function getPhoneByID(id: PhoneNumber): PhoneNumber {
  // Bussines Logic
  return "Example"
}

getPhoneByID(20);

// Literal Types

type SquareSize = '100x100' | "450x450" | "1080x1080";

let smallPicture: SquareSize = "1080x1080";

console.log(smallPicture);

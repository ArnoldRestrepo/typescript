export {};

// <> // Angle Bracket syntax

let userName: any;
userName = "Explicito";

let message: string = (<string>userName).length > 5 ? "Hello" : "Your Name is very short"

console.log("message", message);

let userNameWithID: any = "Example 1";
userName = (<string>userNameWithID).substring(0, 7);

// AS Syntax

let userNameWithAsSyntax: any = "Example 1";
userName = (userNameWithID as string).substring(0, 7);
console.log("Syntax AS", userNameWithAsSyntax);



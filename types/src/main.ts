console.log('Mi primera Lìnea en TypeScript');

// Typpe : Number
let phone: number;
phone = 1;
// phone = 'Hoola'; Error

// Inferido
let phoneNumber = 3424234234;
// phoneNumber = 'sdfasdfas'; Error

let hex: number = 0x9d0d9d;
let binary: number = 0b1010110;
let octal: number = 0o01234567;

// Tipado Explicito:

// Tipo: Boolean
let isPro: boolean;
isPro = true;

// String
let username: string = 'anbreaker';
username = 'Javier';
// username = true; --> Error

// Template String with use of back-tick ``
let userInfo: string;
userInfo = `
    User info:
    username: ${username}
    firtsname: ${username + ' anbreaker'}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log('userInfo', userInfo);

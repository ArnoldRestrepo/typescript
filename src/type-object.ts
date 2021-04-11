// Type: Object
{
  let user: object;
  user = {};

  user = {
    id: 1,
    userName: 'papparazzi',
    firstName: 'Pablo',
    isPro: true,
  };
}

// Object vs object

const myRealObject = {
  id: 1,
  userName: 'papparazzi',
  firstName: 'Pablo',
  isPro: true,
};

const isInstance: boolean = myRealObject instanceof Object;

console.info('isInstance', isInstance);
console.info('userName', myRealObject.userName);

var asyncAdd = (a, b) => {
    return new Promise((resolve, reject)=> {
      setTimeout(() => {
          if (typeof a === 'number' && typeof b=== 'number' ) {
            resolve(a+b);
          } else {
            reject('Arguments must be numbers');
          }
      }, 2500);
    });
};

asyncAdd(5,7).then((res) => {
  console.log('Result is ', res);
} , (errorMessage) => {
  console.log(errorMessage);
});

var somePromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
// either resolve once or reject once only
      resolve('Hey. It worked');
      reject('Unable to fulfill promise');
    }, 2500);
});

//provides callback for success cases and error cases
// below is called if a promise is fulfilled
somePromise.then((message) => {
  console.log(message);
}, (errorMessage)=> {
    console.log('Error', errorMessage);
});

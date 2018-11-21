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

// promise chaining

asyncAdd(5,7).then((res) => {
  return asyncAdd(res, 33);
} , (errorMessage) => {
  console.log(errorMessage);
}).then((result) => {
      console.log('Should be 45', result);
} , (errorMessage) => {
    console.log(errorMessage);
});

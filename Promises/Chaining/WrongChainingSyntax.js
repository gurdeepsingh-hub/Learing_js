let promise = new Promise((resolve, reject) => {
  console.log("promise is running");
  setTimeout(resolve(1), 1000);
});

promise.then((result) => {
  console.log("1st then value of result is:" + result);
  return new Promise((resolve, reject) => resolve(result * 2));
});

promise.then((result) => {
  console.log("2nd thenvalue of result is:" + result);
  return new Promise((resolve, reject) => resolve(result * 2));
});

promise.then((result) => {
  console.log("3rd then value of result is:" + result);
});

promise.catch((Error) => {
  console.log("Whoops! Error: " + Error);
});

let promise = new Promise((resolve, reject) => {
  console.log("promise is running");
  setTimeout(resolve(1), 1000);
})
  .then((result) => {
    console.log("1st then");
    return new Promise((resolve, reject) => resolve(result * 2));
  })
  .then((result) => {
    console.log("2nd then");
    return new Promise((resolve, reject) => resolve(result * 2));
  })
  .then((result) => {
    console.log("3rd then");
    console.log(result);
  })
  .catch((Error) => {
    console.log("Whoops! Error: " + Error);
  });
/*promise is running
1st then
2nd then
3rd then
4*/
//the above syntax is the correct syntax of chaining
// someone can easily confuse btw chaining and nesting

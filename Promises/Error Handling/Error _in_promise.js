new Promise((resolve, reject) => {
  reject(new Error("Whoops!"));
})
  .then((result) => console.log(result))
  .catch(console.log);

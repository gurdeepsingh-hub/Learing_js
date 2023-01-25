new Promise((resolve, reject) => {
  resolve(1);
})
  .then((result) => {
    throw new Error("Error from then :" + result);
  })
  .catch(console.log);

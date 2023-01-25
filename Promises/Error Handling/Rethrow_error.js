new Promise((resolve, reject) => {
  resolve(1);
})
  .then((result) => {
    throw new Error("Error from then :" + result);
  })
  .catch((Error) => {
    console.log("First catch");
    if (Error instanceof URIError) {
      console.log(Error);
    } else {
      throw Error;
    }
  })
  .then((result) => {
    console.log("Then after first catch");
  })
  .catch((Error) => {
    console.log("2nd catch");
  });
/*First catch
2nd catch*/

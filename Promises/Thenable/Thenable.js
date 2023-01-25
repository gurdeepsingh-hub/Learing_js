class thenable {
  constructor(num) {
    this.num = num;
  }

  then(resolve, reject) {
    console.log(this.num);
    setTimeout(resolve(this.num * 2), 1000);
  }
}

new Promise((resolve) => resolve(1))
  .then((result) => {
    return new thenable(result);
  })
  .then(console.log);

function geeks() {
  //   console.log("for(;;)");
  //   for (let i = 0; i <= 10; i += 2) {
  //     console.log(i + " ");
  //   }
  //   console.log("for...of");
  //   for (let i of ["hanoi", 20.32, 3000]) {
  //     console.log(i + " ");
  //   }
  console.log("for...in");
  let obj = {
    name: "Peter",
    age: 25,
    salary: 3000,
  };
  for (let i in obj) {
    console.log(i + " ");
  }
}
geeks();

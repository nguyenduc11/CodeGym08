export class FizzBuzz {
  message: string;

  constructor(number: number) {
    let isFizz = number % 5 == 0;
    let isBuzz = number % 3 == 0;
    if (number % 3 == 0 && number % 5 == 0) {
      this.message = "FizzBuzz";
    } else if (number % 5 == 0) {
      this.message = "Fizz";
    } else if (number % 3 == 0) {
      this.message = "Buzz";
    } else {
      this.message = number + "";
    }
  }
}

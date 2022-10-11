export class Calculator {
  static readonly ADDITION = "+";
  static readonly SUBSTRACTION = "-";
  static readonly MULTIPLICATION = "*";
  static readonly DIVISION = "/";
  public static calculate(
    firstOperand: number,
    secondOperand: number,
    operator: string
  ): number {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        if (secondOperand != 0) return firstOperand / secondOperand;
        else console.log("Can not divide by 0");
      default:
        console.log("Unsupported operation");
    }
  }
}

//Thuc Hanh Quan Ly San Pham
export class Product {
  private name: string;
  private price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  get getName() {
    return this.name;
  }
  get getPrice() {
    return this.price;
  }
  set setName(name: string) {
    this.name = name;
  }
  set setPrice(price: number) {
    this.price = price;
  }
}

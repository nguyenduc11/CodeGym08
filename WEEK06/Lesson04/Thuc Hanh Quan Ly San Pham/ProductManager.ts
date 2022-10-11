//Product Manager Declarations
export class ProductManager {
  // private products = Array();
  private products: any[] = [];
  constructor() {}
  getAll() {
    return this.products;
  }
  add(object: any) {
    this.products.push(object);
  }
}

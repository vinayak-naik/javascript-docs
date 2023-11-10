class Product {
  constructor(itemName) {
    console.log('passed by super is'+" "+ itemName);
    this.itemName = itemName;
  }

  getItemName() {
    return this.itemName + " " + "is a product";
  }
}

class Furniture extends Product {
  constructor(itemName) {
    super(itemName);
  }
  getItemName() {
    return this.itemName + " " + "is a furniture"; 
  }
}

const pencil = new Product("Pencil");
const chair = new Furniture("Chair");

console.log(pencil.getItemName());
console.log(chair.getItemName());


// Output:
// passed by super is Pencil
// passed by super is Chair
// Pencil is a product
// Chair is a furniture
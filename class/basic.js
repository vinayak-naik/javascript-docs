class Product{
    constructor(itemName,price,discount,productCode){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        productCode = productCode;
    }

    get getDiscount(){
        return this.discount
    }
    set setDiscount(value){
         this.discount=value
    }
    discountValue(val){
        return this.discount*this.price/val
    }
}

const chair=new Product('Chair',25,5,1)
console.log(chair.getDiscount)
console.log(chair.setDiscount=10)
console.log(chair.getDiscount)
console.log(chair.discountValue(1))
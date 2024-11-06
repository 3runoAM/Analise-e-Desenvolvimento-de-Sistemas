const shoppingList = new ShoppingList();

do {
    const productName = prompt('Digite o nome do produto: ');

    if(!productName) break;

    let productPrice = "";
    while(productPrice === "" || isNaN(productPrice)){
        productPrice = prompt('Digite o preço do produto (apenas números): ');
    }

    productPrice = Number(productPrice);

    shoppingList.productList.push({
        name: productName,
        price: productPrice
    });
} while (true)

alert(shoppingList.toString());

/**/

function ShoppingList(){
    this.productList = [];
    this.total;

    this.setTotal = function(){
        let total = 0;
        for(let product of this.productList){
            total += product.price;
        }
        this.total = total;
    }

    this.toString = function() {
        if (!this.total){
            this.setTotal();
        }

        let shoppingList = "Lista de compras"
        for(let product of this.productList){
            shoppingList += `\n${product.name} - R$ ${product.price}`;
        }
        shoppingList += (`\nTotal: R$ ${this.total}`);

        return shoppingList;
    }
}
class Food {
    constructor() {
        this.image = loadImage("images/milk.png");
        this.foodStock = 0;

    }
    getFoodStock() {
        // var foodStockref = database.ref('Food');
        // foodStockref.on("value", function(data) {
        //     this.foodStock = data.val();
        // })
        return this.foodStock;
    }

    updateFoodStock(stock) {
        // database.ref('/').update({
        //     Food: stock
        // })
        this.foodStock = stock;
    }
    deductFood() {
        // database.ref('/').update({
        //     Food: this.foodStock - 1
        // })
        if(this.foodStock>0){
            this.foodStock-=1;
        }
    }
    display() {
        var x = 80;
        var y = 100;

        imageMode(CENTER);
        image(this.image, 720, 220, 70, 70);

        if (this.foodStock != 0) {
            for (var i = 0; i < this.foodStock; i++) {
               image(this.image, x, y, 50, 50);
                x = x + 30;
                if (i % 10 == 0) {
                    x = 80;
                    y += 50;
                }
                
                console.log(x);
                console.log(y);
               
            }
        }
    }
}
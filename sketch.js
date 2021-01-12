var dog, happyDog, normalDog;
var foodS = 20;
var foodStock;
var database;
var foodb, addb;
var fedTime, lastFed;
var foodObj;
var count;

function preload() {
    happyDog = loadImage("images/happy dog.png");
    normalDog = loadImage("images/Dog.png");
}

function setup() {
    database = firebase.database();
    createCanvas(1000, 500);

    foodObj = new Food();

    foodStock = database.ref('Food');
    foodStock.on("value", readStock);

    dog = createSprite(width / 2, height / 2, 50, 50);
    dog.addImage(normalDog);
    dog.scale = 0.3;

    foodb = createButton("Feed the Dog");
    foodb.position(700, 95);
    foodb.mousePressed(feed);

    addb = createButton("Add Food");
    addb.position(800, 95);
    addb.mousePressed(addFood);

}


function draw() {
    background(color(46, 139, 87))

    if (keyDown(UP_ARROW)) {
        writeStock(foodS);
        dog.addImage(happyDog);
    }
    if (foodS === 0) {
        dog.addImage(normalDog);
    }

    count = foodObj.getFoodStock();
    foodObj.display();
    drawSprites();
    textSize(24);
    fill("white");
    text("Press Up Arrow to feed the Dog Milk", 50, 50);
    text("Milk Remaining: " + foodS, 150, 450);

}

function readStock(data) {
    foodS = data.val();
    foodObj.updateFoodStock(foodS);
}

function writeStock(x) {
    if (x <= 0) {
        x = 0;
    } else {
        x = x - 1;
    }
    database.ref('/').update({
        Food: x
    })
}


function feed() {
    writeStock(foodStock);
    // alert("hi");
    console.log("hi!");
    console.log(foodStock);
}

function addFood() {
    if (foodS < 20) {
        foodS++;
        database.ref('/').update({
            Food: foodS
        })
    }
}
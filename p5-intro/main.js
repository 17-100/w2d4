
class Player {
    constructor() {
        this.x = 500;
        this.y = 500;
        this.image;
    }
    moveUp() {
        this.y -= 10;
    }
    moveDown() {
        this.y += 10;
    }
    moveLeft() {
        this.x -= 10;
    }
    moveRight() {
        this.x += 10;
    }
    draw() {
        this.x = constrain(this.x, 0, (width - 100))
        this.y = constrain(this.y, 0, 500)
        image(this.image, this.x, this.y, 100, 100)

        if (keyIsDown(87)) {
            console.log('pressing w');
            this.moveUp()
        }
        if (keyIsDown(83)) {
            console.log('pressing s');
            this.moveDown()
        }
        if (keyIsDown(65)) {
            console.log('pressing a');
            this.moveLeft()
        }
        if (keyIsDown(68)) {
            console.log('pressing d');
            this.moveRight()
        }
    }
}

class Game {
    constructor() {
        this.player = new Player();
    }
    preload() {
        this.player.image = loadImage('gustavo.png');
    }

    draw() {

        clear();
        game.player.draw();
        // rect(xCoordinate, yCoordinate, width, height)
        // let rectColor = color(0, 256, 0)
        // fill(0, 256, 0) // fill is applied to all following elements - you can use rgb or string values
        rect(100, 100, 50, 50);

        // fill('red')
        // fill('black')
        // circle(x, y, radius)
        // push - pop - sets a context
        // console.log(mouseX, mouseY);
        // push()

        // circle(mouseX, mouseY, 100)
        // pop()
        // x += speed
        // if (x + 50 > 1000) {
        //     // change direction 
        //     speed = - 3
        // }
        // rect(x, 300, 50, 50);
        stroke('black');
        // line(xStart, yStart, xEnd, yEnd)
        line(0, 100, 1000, 100)
        line(0, 200, 1000, 200)

        // console.log('i am drawing 🙃');
    }
}

console.log('hello p5');
// let x = 100;
// let speed = 3;
// let img;

const game = new Game()
// used to load assets like images
function preload() {
    console.log('this is preload');
    game.preload()
}
// sets up the canvas
function setup() {
    console.log('this is setup');
    createCanvas(1000, 600)
    // then 'width' and 'heigth' can be used to access the sidth and height of the canvas 
}

function draw() {
    frameRate(30)
    game.draw();
}

function keyPressed() {
    console.log(keyCode);
    // this is a p5 constant
    if (UP_ARROW) {
        game.player.moveUp();
    }
    if (keyCode === 40) {
        game.player.moveDown();
    }
    if (keyCode === 37) {
        game.player.moveLeft();
    }
    if (keyCode === 39) {
        game.player.moveRight();
    }
}
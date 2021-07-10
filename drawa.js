class Shape {
    //Template method
    draw() {
        if (!this.canDraw())
            return;
        this.doDraw();
        this.notifyListeners();
    }

    canDraw() {
        //If it possible to draw the shape
        return true;
    }

    //primitive operation
    doDraw() {}

    notifyListeners() {
        console.log("shape is drawn");
    }
}

class Сircle extends Shape {
    constructor() {
        super();
    }

    doDraw() {
        console.log("draw a circle");
    }
}

//Client
let сircle = new Сircle();
сircle.draw();

Try it in Playground

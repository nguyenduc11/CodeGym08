alert("hello world!");
class Rectangular {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    perimeter() {
        return 2*(this.w + this.h);
    }
    area() {
        return this.w * this.h;
    };
    draw() {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x , this.y, this.w, this.h);
        ctx.stroke();
        ctx.closePath();
        ctx.fill();
    }
}

let rect1 = new Rectangular(1, 1, 100, 200);
alert(rect1.x);
alert(rect1.y);
alert(rect1.w);
alert(rect1.h);
alert(rect1.perimeter());
alert(rect1.area());
rect1.draw();

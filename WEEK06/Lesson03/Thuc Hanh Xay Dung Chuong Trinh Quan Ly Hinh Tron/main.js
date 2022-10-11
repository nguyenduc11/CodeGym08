var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = "green";
        this.radius = 20;
        this.color = color;
        this.radius = radius;
    }
    return Circle;
}());
var circleList = [];
circleList.push(new Circle("yellow", 10));
circleList.push(new Circle("green", 15));
circleList.push(new Circle("blue", 20));
function showCircle(circle) {
    console.log("HINH TRON NAY CO MAU " + circle.color + " VA BAN KINH LA " + circle.radius);
}
circleList.forEach(showCircle);

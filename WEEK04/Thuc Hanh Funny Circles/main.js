// Ve hinh tron voi kich thuoc co dinh
function Circle(x, y, radius){
  this.x = x;
  this.y = y;
  this.radius = radius;
}

function getRandomHex(){
  return Math.floor(Math.random()*225);
}

function getRandomColor(){
  var red = getRandomHex();
  var green = getRandomHex();
  var blue = getRandomHex();
  return "rgb(" + red + "," + blue + "," + green +")";
}
/*function createCircle(){
  var ctx = document.getElementById("myCanvas").getContext("2d");
  var radius = Math.floor(Math.random() * 80);
  var circle= new Circle(500, 500, radius);
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  ctx.fill();
}
createCircle();*/

/*
// Ve hinh tron voi ban kinh ngau nhien
function createCircle(){
  var ctx = document.getElementById("myCanvas").getContext("2d");
  var radius = Math.floor(Math.random() * 80);
  var circle = new Circle(500,500, radius);
  ctx.beginPath();
  ctx.arc(circle.x , circle.y , circle.radius , 0 ,2*Math.PI);
  ctx.fill();
}
createCircle();
*/

// Ve hinh tron voi mau ngau nhien
function createCircle(){
  var ctx = document.getElementById("myCanvas").getContext("2d");
  var radius = Math.floor(Math.random() * 80);
  var color = getRandomColor();
  var circle = new Circle(500,500, radius);
  ctx.beginPath();
  ctx.arc(circle.x , circle.y , circle.radius , 0 ,2*Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
createCircle();

// Tao nhieu hinh tron
function createMultipleCircle(){
  for(var i = 0; i < 30; i++){
    createCircle();
  }
}

createMultipleCircle();
var paintPendulum;
var isRunning = true;

function setup() {
  frameRate(60);
  let canvas = createCanvas(800, 800);
  canvas.parent("canvasContainer");

  let resetBtn = select("#resetBtn");
  resetBtn.mousePressed(function () {
    print("meow");
  });

  var xRadius = 1000;
  var yRadius = 500;
  var pointsPerFrame = 2;
  var centerX = 0; width / 2;
  var centerY = height / 2;
  var globalSpeed = 100;

  // White
  var strokeColor = color(255);
  // Gold
  // var strokeColor = color(255, 215, 40);
  // Red
  var strokeColor = color(175, 20, 40);

  paintPendulum = new PaintPendulum(xRadius, yRadius, pointsPerFrame, centerX, centerY, globalSpeed, strokeColor);

  // Black
  background(0, 0, 0);
  // Dark blue
  // background(17, 17, 110);

}

function draw() {
  if (isRunning) {
    paintPendulum.moveAndPaint();
  } else {
    if (keyIsDown(RIGHT_ARROW)) {
      paintPendulum.moveAndPaintOnce();
    }
  }

  var rotationSpeedElem = select("#rotationSpeed");
  print(rotationSpeedElem.value());
}

function keyPressed() {
  if (keyCode == 32) {
    isRunning = !isRunning;
  }
}

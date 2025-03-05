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

  var xRadius = 400;
  var yRadius = 200;
  var centerX = width / 2;
  var centerY = height / 2;
  var globalSpeed = 10;

  // White
  var strokeColor = color(255);
  // Gold
  // var strokeColor = color(255, 215, 40);
  // Red
  var strokeColor = color(175, 20, 40);

  var rotationSpeed = PI * 0.0005;
  var rotationReductFactor = 0.000123;
  var radiusReductSpeed = 0.019;

  let settings = new PaintPendulumSettings(
    xRadius,
    yRadius,
    centerX,
    centerY,
    globalSpeed,
    strokeColor,
    rotationSpeed,
    rotationReductFactor,
    radiusReductSpeed
  );

  paintPendulum = new PaintPendulum(settings);

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
  // print(rotationSpeedElem.value());
}

function keyPressed() {
  if (keyCode == 32) {
    isRunning = !isRunning;
  }
}

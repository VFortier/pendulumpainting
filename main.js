var paintPendulum;
var settings;
var isRunning = true;

function setup() {
  frameRate(60);
  let canvas = createCanvas(800, 800);
  canvas.parent("canvasContainer");

  initPendulum();
  paintBackground();
  bindHTMLEvents(settings);
  bindSettingsToHTML(paintPendulum.settings);
}

function initPendulum() {
  var xRadius = 400;
  var yRadius = 200;
  var centerX = width / 2;
  var centerY = height / 2;
  var globalSpeed = 100;

  // White
  // var strokeColor = color(255);
  // Gold
  // var strokeColor = color(255, 215, 40);
  // Red
  var strokeColor = "ac1428";

  var rotationSpeed = 100;
  var rotationReductFactor = 100;
  var radiusReductSpeed = 100;

  settings = new PaintPendulumSettings(
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
  paintPendulum.init();
}

function draw() {
  if (isRunning) {
    paintPendulum.moveAndPaint();
  } else {
    if (keyIsDown(RIGHT_ARROW)) {
      paintPendulum.moveAndPaintOnce();
    }
  }
}

function keyPressed() {
  // Spacebar
  if (keyCode == 32) {
    isRunning = !isRunning;
  }
}

function paintBackground() {
  // Black
  background(0, 0, 0);
  // Dark blue
  // background(17, 17, 110);
}

function resetBtnPressed() {
  paintBackground();
  paintPendulum.init();
  isRunning = true;
}
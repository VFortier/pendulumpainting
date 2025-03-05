var paintPendulum;
var settings;
var isRunning = true;

function setup() {
  frameRate(60);
  let canvas = createCanvas(800, 800);
  canvas.parent("canvasContainer");

  settings = initSettings();
  paintPendulum = new PaintPendulum(settings.pendulum);
  paintPendulum.init();

  paintBackground(settings.bg);
  bindHTMLEvents(settings);
  bindSettingsToHTML(settings);
}

function initSettings() {
  var xRadius = 400;
  var yRadius = 200;
  var centerX = width / 2;
  var centerY = height / 2;
  var globalSpeed = 100;

  // White
  var strokeColor = color(255);
  // Gold
  // var strokeColor = color(255, 215, 40);
  // Red
  //var strokeColor = "ac1428";

  var rotationSpeed = 100;
  var rotationReductFactor = 100;
  var radiusReductSpeed = 100;
  var swingingLength = 100;
  var swingingSpeed = 0;
  var startAngle = 0;

  pendulumSettings = new PaintPendulumSettings(
    xRadius,
    yRadius,
    centerX,
    centerY,
    globalSpeed,
    strokeColor,
    rotationSpeed,
    rotationReductFactor,
    radiusReductSpeed,
    swingingLength,
    swingingSpeed,
    startAngle
  );

  var backgroundColor = "000000";
  var backgroundHighlights = "330000";
  var backgroundHighlightsThreshold = 300;
  var backgroundHighlightsDetail = 500;
  var highlightStretch = 10;

  var bgSettings = new BackgroundSettings(
    backgroundColor,
    backgroundHighlights,
    backgroundHighlightsThreshold,
    backgroundHighlightsDetail,
    highlightStretch
  );

  return new GlobalSettings(pendulumSettings, bgSettings);
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

  // r
  if (keyCode == 82) {
    resetBtnPressed();
  }

  if (keyCode == UP_ARROW) {
    paintPendulum.moveAndPaintOnce();
  }
}


function resetBtnPressed() {
  paintBackground(settings.bg);
  paintPendulum.init();
  isRunning = true;
}
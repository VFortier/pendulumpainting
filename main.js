var paintPendulum;
var settings;
var isRunning = true;

// Square
// var CANVAS_WIDTH = 800;
// var CANVAS_HEIGHT = 800;

// 5in x 7in : 900 x 1260
var CANVAS_WIDTH = 1260;
var CANVAS_HEIGHT = 900;

// 4in x 6in : 720 x 1080
// var CANVAS_WIDTH = 1080;
// var CANVAS_HEIGHT = 720;

function setup() {
  frameRate(60);
  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  canvas.parent("canvasContainer");

  settings = initSettings();
  paintPendulum = new PaintPendulum(settings.pendulum);
  paintPendulum.init();

  paintBackground(settings.bg);
  bindHTMLEvents(settings);
  bindSettingsToHTML(settings);
}

function initSettings() {
  if (settingsCookieExists()) {
    print("Loading settings from cookie");
    var settings = new GlobalSettings();
    settings = settings.loadFromCookie();

    if (settings !== null) {
      return settings;
    }
  }

  print("No settings found in cookie. Loading default settings");
  return initSettingsDefault();
}

function initSettingsDefault() {
  var xRadius = 400;
  var yRadius = 200;
  var centerX = width / 2;
  var centerY = height / 2;
  var globalSpeed = 100;

  // White
  var strokeColor = "FFFFFF";
  // Gold
  // var strokeColor = color(255, 215, 40);
  // Red
  //var strokeColor = "ac1428";

  var strokeWeight = 3;
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
    strokeWeight,
    rotationSpeed,
    rotationReductFactor,
    radiusReductSpeed,
    swingingLength,
    swingingSpeed,
    startAngle
  );

  var backgroundColor = "030333";
  var backgroundHighlights = "060699";
  var backgroundHighlightsThreshold = 100;
  var backgroundHighlightsDetail = 500;
  var highlightStretch = 10;

  var bgSettings = new BackgroundSettings(
    backgroundColor,
    backgroundHighlights,
    backgroundHighlightsThreshold,
    backgroundHighlightsDetail,
    highlightStretch
  );

  var settings = new GlobalSettings(pendulumSettings, bgSettings);

  return settings;
}

function draw() {
  drawForRealTime();
}

function drawForRealTime() {
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
    resetPendulumBtnPressed();
  }

  if (keyCode == UP_ARROW) {
    paintPendulum.moveAndPaintOnce();
  }
}

// disable scrolling down with spacebar
window.addEventListener('keydown', function (e) {
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});

function resetBtnPressed() {
  paintBackground(settings.bg);
  paintPendulum.init();
  isRunning = true;
}

function resetPendulumBtnPressed() {
  paintPendulum.init();
  updatePixels();
  isRunning = true;
}

function saveAsImageBtnPressed() {
  save("PendulumPainting.png");
}

function defaultSettingsBtnPressed() {
  settings = initSettingsDefault();
  paintBackground(settings.bg);
  paintPendulum.init();
  bindSettingsToHTML(settings);
  settings.saveAsCookie();
}
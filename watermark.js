
function drawWatermark() {
  const MIN_TEXT_SIZE = 12;
  const MAX_TEXT_SIZE = 24;
  const COLOR = color(0,0,0);
  push();
  noStroke();
  fill(COLOR);

  let largestSide = (height > width) ? height : width;
  let myTextSize = largestSide / 40;

  if (myTextSize < MIN_TEXT_SIZE) {
    myTextSize = MIN_TEXT_SIZE;
  } else if (myTextSize > MAX_TEXT_SIZE) {
    myTextSize = MAX_TEXT_SIZE;
  }

  textSize(myTextSize);

  textStyle(BOLD);
  textFont('Helvetica');
  let watermarkText = "@EccentricVertices";
  let watermarkWidth = textWidth(watermarkText);
  let watermarkX = width - watermarkWidth - (watermarkWidth * 0.08);
  let watermarkY = height - (myTextSize * .5);
  text("@EccentricVertices", watermarkX, watermarkY);
  pop();
}

draw = (function() {
  var cachedDraw = draw;

  return function() {
    cachedDraw();

    drawWatermark(width, height);
  };
})();
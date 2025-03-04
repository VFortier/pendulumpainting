(function() {
  
  var isCapturerEnable = true;  // Conveniant on/off switch
  var durationOfCapture = 2000;

  if (!isCapturerEnable) {
    return
  }

  var fps;
  var capturer;
  var startMillis;

  setup = (function() {
    var cachedSetup = setup;

    return function() {
      cachedSetup();
      fps = frameRate();
      capturer = new CCapture({ format: 'png', framerate: fps, verbose: true });
      capturer.start();
    };
  })();

  draw = (function() {
    var cachedDraw = draw;

    return function() {

      if (startMillis == null) {
        startMillis = millis();
      }

      var elapsed = millis() - startMillis;
      //console.log("elapsed: " + elapsed);

      if (elapsed > durationOfCapture) {
        noLoop();
        console.log('finished recording.');
        capturer.stop();
        capturer.save();
        return;
      }

      cachedDraw();

      capturer.capture(document.getElementById('defaultCanvas0'));
    };
  })();
})();
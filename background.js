function paintBackground(bgSettings) {

    // TODO - if bgcolor and highlightsColor are the same
    background(bgSettings.getColor());
    // ELSE...

    loadPixels();
    noiseSeed(random() * 1000);
    noiseDetail();
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var index = (x + (y * width)) * 4;

            var highlightSize = bgSettings.getHighlightsDetail();
            var highlightStretch = bgSettings.getHighlightsStretch();
            var noiseVal = noise(x * highlightSize * highlightStretch, y * highlightSize);
            // Make noiseVal closer to 0 unless it's really high (i.e. follow exponential curve)
            noiseVal = pow(noiseVal, bgSettings.getHighlightsThreshold());

            var highlightColor = bgSettings.getHighlightsColor();

            pixels[index + 0] = noiseVal * red(highlightColor);
            pixels[index + 1] = noiseVal * green(highlightColor);
            pixels[index + 2] = noiseVal * blue(highlightColor);
            pixels[index + 3] = 255;
        }
    }
    updatePixels();
}

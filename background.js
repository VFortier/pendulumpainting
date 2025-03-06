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
            var highlightStretchX = highlightStretch < 1 ? highlightStretch : 1;
            var highlightStretchY = highlightStretch > 1 ? (1 / highlightStretch) : 1;

            var noiseVal = noise(x * highlightSize * highlightStretchX, y * highlightSize * highlightStretchY);
            // Make noiseVal closer to 0 unless it's really high (i.e. follow exponential curve)
            noiseVal = pow(noiseVal, bgSettings.getHighlightsThreshold());

            var highlightColor = bgSettings.getHighlightsColor();
            var bgColor = bgSettings.getColor();
            var bgRed = red(bgColor);
            var bgGreen = green(bgColor);
            var bgBlue = blue(bgColor);

            pixels[index + 0] = map(noiseVal, 0, 1, bgRed, red(highlightColor));
            pixels[index + 1] = map(noiseVal, 0, 1, bgGreen, green(highlightColor));
            pixels[index + 2] = map(noiseVal, 0, 1, bgBlue, blue(highlightColor));
            pixels[index + 3] = 255;
        }
    }
    updatePixels();
}

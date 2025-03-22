function GlobalSettings(pendulumSettings, bgSettings) {
    this.pendulum = pendulumSettings;
    this.bg = bgSettings;
}


function PaintPendulumSettings(
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
    startAngle) {

    this.xRadius = xRadius;
    this.yRadius = yRadius;
    this.centerX = centerX;
    this.centerY = centerY;
    this.globalSpeed = globalSpeed;
    this.strokeColor = strokeColor;
    this.strokeWeight = strokeWeight;
    this.rotationSpeed = rotationSpeed;
    this.rotationReductFactor = rotationReductFactor;
    this.radiusReductSpeed = radiusReductSpeed;
    this.swingingLength = swingingLength;
    this.swingingSpeed = swingingSpeed;
    this.startAngle = startAngle;

    this.pointsPerFrame = 30;

    this.getInitXRadius = function () {
        return this.xRadius;
    }

    this.getInitYRadius = function () {
        return this.yRadius;
    }

    this.getCenterX = function () {
        return this.centerX;
    }

    this.getCenterY = function () {
        return this.centerY;
    }

    this.getGlobalSpeed = function () {
        return this.globalSpeed / 50;
    }

    this.getStrokeColorString = function () {
        return this.strokeColor;
    }

    this.getStrokeColor = function () {
        return color("#" + this.strokeColor);
    }

    this.getStrokeWeight = function () {
        return this.strokeWeight;
    }

    this.getRotationSpeed = function () {
        return this.rotationSpeed * PI * 0.000005 / this.pointsPerFrame;
    }

    this.getRotationReductFactor = function () {
        return 1 - ((this.rotationReductFactor * 0.00000123) / this.pointsPerFrame);
    }

    this.getRadiusReductSpeed = function () {
        return this.radiusReductSpeed * 0.0002 / this.pointsPerFrame;
    }

    this.getSwingingLength = function () {
        return this.swingingLength;
    }

    this.getSwingingSpeed = function () {
        return this.swingingSpeed * 0.0004 / this.pointsPerFrame;
    }

    this.getStartAngle = function () {
        return radians(this.startAngle);
    }

    this.getPointsPerFrame = function () {
        return this.pointsPerFrame;
    }
}

function BackgroundSettings(
    bgColor,
    highlightsColor,
    highlightsThreshold,
    highlightsDetail,
    highlightsStretch) {
    this.bgColor = bgColor;
    this.highlightsColor = highlightsColor;
    this.highlightsThreshold = highlightsThreshold;
    this.highlightsDetail = highlightsDetail;
    this.highlightsStretch = highlightsStretch;

    this.getColor = function () {
        return color("#" + this.bgColor);
    }

    this.getHighlightsColor = function () {
        return color("#" + this.highlightsColor);
    }

    this.getHighlightsThreshold = function () {
        return this.highlightsThreshold / 50;
    }

    this.getHighlightsDetail = function () {
        return this.highlightsDetail * 0.00005;
    }

    this.getHighlightsStretch = function () {
        return this.highlightsStretch / 100;
    }
}
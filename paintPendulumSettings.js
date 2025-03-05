function PaintPendulumSettings(
    xRadius,
    yRadius,
    centerX,
    centerY,
    globalSpeed,
    strokeColor,
    rotationSpeed,
    rotationReductFactor,
    radiusReductSpeed) {

    this.xRadius = xRadius;
    this.yRadius = yRadius;
    this.centerX = centerX;
    this.centerY = centerY;
    this.globalSpeed = globalSpeed;
    this.strokeColor = strokeColor;
    this.rotationSpeed = rotationSpeed;
    this.rotationReductFactor = rotationReductFactor;
    this.radiusReductSpeed = radiusReductSpeed;

    this.pointsPerFrame = 2;

    this.getXRadius = function () {
        return this.xRadius;
    }

    this.getYRadius = function () {
        return this.yRadius;
    }

    this.getCenterX = function () {
        return this.centerX;
    }

    this.getCenterY = function () {
        return this.centerY;
    }

    this.getGlobalSpeed = function () {
        return this.globalSpeed;
    }

    this.getStrokeColor = function () {
        return this.strokeColor;
    }

    this.getRotationSpeed = function () {
        return this.rotationSpeed / this.pointsPerFrame;
    }

    this.getRotationReductFactor = function () {
        return 1 - (this.rotationReductFactor / this.pointsPerFrame);
    }

    this.getRadiusReductSpeed = function () {
        return this.radiusReductSpeed / this.pointsPerFrame;
    }

    this.getPointsPerFrame = function () {
        return this.pointsPerFrame;
    }


}
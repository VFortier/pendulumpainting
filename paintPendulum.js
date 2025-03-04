function PaintPendulum(xRadius, yRadius, pointsPerFrame, centerX, centerY, globalSpeed, strokeColor) {
    this.INIT_GLOBAL_ROTATION_SPEED = PI * 0.00019; // pointsPerFrame;
    this.GLOBAL_ROTATION_REDUCT_FACTOR = 1 - (0.000123 / pointsPerFrame);
    this.ANGLE_SPEED = PI * 0.01 / pointsPerFrame;
    this.RADIUS_REDUCT_SPEED = 0.019 / pointsPerFrame;

    this.x = this.xRadius * cos(this.angle);
    this.y = this.yRadius * sin(this.angle);
    this.angle = 0;
    this.xRadius = xRadius;
    this.yRadius = yRadius;
    this.xToY = xRadius / yRadius;
    this.pointsPerFrame = pointsPerFrame;
    this.globalRotationSpeed = this.INIT_GLOBAL_ROTATION_SPEED;
    this.globalRotation = 0;
    this.prevX;
    this.prevY;
    this.centerX = centerX;
    this.centerY = centerY;
    this.globalSpeed = globalSpeed;
    this.strokeColor = strokeColor;

    this.moveAndPaint = function () {
        for (var i = 0; i < this.globalSpeed; i++) {
            this.moveAndPaintOnce();
        }
    }

    this.moveAndPaintOnce = function () {
        for (var j = 0; j < this.pointsPerFrame; j++) {
            push();
            translate(this.centerX, this.centerY);

            rotate(this.globalRotation);
            this.globalRotationSpeed = this.globalRotationSpeed * this.GLOBAL_ROTATION_REDUCT_FACTOR;
            this.globalRotation += this.globalRotationSpeed;

            this.prevX = this.x;
            this.prevY = this.y;
            this.x = this.xRadius * cos(this.angle);
            this.y = this.yRadius * sin(this.angle);
            this.angle += this.ANGLE_SPEED + abs(sin(this.angle) * this.ANGLE_SPEED * 0.5);
            this._dropPaintWithVertex();
            pop();

            this.xRadius = this.xRadius > 0 ? this.xRadius - this.RADIUS_REDUCT_SPEED * this.xToY : 0;
            this.yRadius = this.yRadius > 0 ? this.yRadius - this.RADIUS_REDUCT_SPEED : 0;
        }
    }

    this._dropPaintWithPoints = function () {
        stroke(this.strokeColor);
        strokeWeight(3);
        point(this.x, this.y);
    }

    this._dropPaintWithVertex = function () {
        stroke(this.strokeColor);
        strokeWeight(2);
        noFill();
        line(this.x, this.y, this.prevX, this.prevY);
    }
}
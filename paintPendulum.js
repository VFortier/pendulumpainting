function PaintPendulum(settings) {
    this.settings = settings;

    this.angleSpeed = PI * 0.01 / this.settings.getPointsPerFrame();

    this.angle = 0;
    this.x = this.xRadius * cos(this.angle);
    this.y = this.yRadius * sin(this.angle);
    this.xRadius = this.settings.getXRadius();
    this.yRadius = this.settings.getYRadius();
    this.xToY = this.settings.getXRadius() / this.settings.getYRadius();
    this.rotationSpeed = this.settings.getRotationSpeed();
    this.rotation = 0;
    this.prevX;
    this.prevY;

    this.moveAndPaint = function () {
        for (var i = 0; i < this.settings.getGlobalSpeed(); i++) {
            this.moveAndPaintOnce();
        }
    }

    this.moveAndPaintOnce = function () {
        for (var j = 0; j < this.settings.getPointsPerFrame(); j++) {
            push();
            translate(this.settings.getCenterX(), this.settings.getCenterY());

            rotate(this.rotation);
            this.rotationSpeed = this.rotationSpeed * this.settings.getRotationReductFactor();
            this.rotation += this.rotationSpeed;

            this.prevX = this.x;
            this.prevY = this.y;
            this.x = this.xRadius * cos(this.angle);
            this.y = this.yRadius * sin(this.angle);
            this.angle += this.angleSpeed + abs(sin(this.angle) * this.angleSpeed * 0.5);
            this._dropPaintWithVertex();
            pop();

            this.xRadius = this.xRadius > 0 ? this.xRadius - this.settings.getRadiusReductSpeed() * this.xToY : 0;
            this.yRadius = this.yRadius > 0 ? this.yRadius - this.settings.getRadiusReductSpeed() : 0;
        }
    }

    this._dropPaintWithPoints = function () {
        stroke(this.settings.getStrokeColor());
        strokeWeight(3);
        point(this.x, this.y);
    }

    this._dropPaintWithVertex = function () {
        stroke(this.settings.getStrokeColor());
        strokeWeight(2);
        noFill();
        line(this.x, this.y, this.prevX, this.prevY);
    }
}
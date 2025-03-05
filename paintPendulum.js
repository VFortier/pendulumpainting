function PaintPendulum(settings) {
    this.settings = settings;

    this.init = function () {
        this.angleSpeed = PI * 0.01 / this.settings.getPointsPerFrame();
        this.angle = this.settings.getStartAngle();
        this.xRadius = this.settings.getInitXRadius();
        this.yRadius = this.settings.getInitYRadius();
        this.x = this.xRadius * cos(this.angle);
        this.y = this.yRadius * sin(this.angle);
        this.xToY = this.settings.getInitXRadius() / this.settings.getInitYRadius();
        this.rotationSpeed = this.settings.getRotationSpeed();
        this.rotation = this.settings.getStartAngle();
        this.swinging = 0;
    }

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

            let swingValue = this.settings.getSwingingLength() * sin(this.swinging);
            this.swinging += this.settings.getSwingingSpeed();
            translate(0, swingValue);

            this._dropPaintWithVertex();
            pop();


            // Keep ellipse proportions
            this.xRadius = this.xRadius > 0 ? this.xRadius - this.settings.getRadiusReductSpeed() * this.xToY : 0;
            this.yRadius = this.yRadius > 0 ? this.yRadius - this.settings.getRadiusReductSpeed() : 0;

            // Reduce equally 
            // this.xRadius = this.xRadius > 0 ? this.xRadius - this.settings.getRadiusReductSpeed() : 0;
            // this.yRadius = this.yRadius > 0 ? this.yRadius - this.settings.getRadiusReductSpeed() : 0;

            // In between
            //let factor = this.xToY > 1 ? this.xToY / 1.3 : this.xToY * 1.;
            //this.xRadius = this.xRadius > 0 ? this.xRadius - this.settings.getRadiusReductSpeed() * factor : 0;
            //this.yRadius = this.yRadius > 0 ? this.yRadius - this.settings.getRadiusReductSpeed() : 0;
        }
    }

    this._dropPaintWithPoints = function () {
        stroke(this.settings.getStrokeColor());
        strokeWeight(this.settings.getStrokeWeight());
        point(this.x, this.y);
    }

    this._dropPaintWithVertex = function () {
        let strokeColor = this.settings.getStrokeColor();
        stroke(strokeColor);
        strokeWeight(this.settings.getStrokeWeight());
        noFill();
        line(this.x, this.y, this.prevX, this.prevY);
    }
}
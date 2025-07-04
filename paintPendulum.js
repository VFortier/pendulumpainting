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
        this.strokeWeight = this.settings.getStrokeWeight();
        this.paintCounter = 0;
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

            // this._dropPaintWithSplashes();
            this._dropPaintWithVertex();
            pop();


            // Keep ellipse proportions
            //this.xRadius = this.xRadius > 0 ? this.xRadius - this.settings.getRadiusReductSpeed() * this.xToY : 0;
            //this.yRadius = this.yRadius > 0 ? this.yRadius - this.settings.getRadiusReductSpeed() : 0;

            // Reduce equally 
            //this.xRadius = this.xRadius > 0 ? this.xRadius - this.settings.getRadiusReductSpeed() : 0;
            //this.yRadius = this.yRadius > 0 ? this.yRadius - this.settings.getRadiusReductSpeed() : 0;

            // In between
            let factor = this.xToY > 1 ? this.xToY / 1.3 : this.xToY * 1.;
            this.xRadius = this.xRadius > 0 ? this.xRadius - this.settings.getRadiusReductSpeed() * factor : 0;
            this.yRadius = this.yRadius > 0 ? this.yRadius - this.settings.getRadiusReductSpeed() : 0;
        }
        this.paintCounter++;
    }

    this._dropPaintWithPoints = function () {

        this.stokeWeight -= this.settings.stokeWeightDecreaseSpeed;

        stroke(this.settings.getStrokeColor());
        strokeWeight(this.stokeWeight);
        point(this.x, this.y);

        // WIP - gradient stroke - not working because new points are drawn over previous ones
        // var strokeStep = 0.5;
        // var colorStep = 50 / this.settings.getStrokeWeight();
        // var counter = 1;

        // for (var i = this.settings.getStrokeWeight(); i > 0; i -= strokeStep) {
        //     strokeWeight(i);
        //     var myColor = this.settings.getStrokeColor();
        //     var r = red(myColor) + colorStep * counter;
        //     var g = green(myColor) + colorStep * counter;
        //     var b = blue(myColor) + colorStep * counter;
        //     var newColor = color(r, g, b);

        //     stroke(newColor);
        //     print(newColor);
        //     point(this.x, this.y);
        //     counter++;
        // }
    }

    this._dropPaintWithVertex = function () {
        // WITH STROKE DECREASE
        // Hardcoded for now - to be moved to settings
        // this.settings.strokeWeightDecreaseSpeed = 0.000002;
        //this.settings.strokeWeightDecreaseSpeed = 0;

        // if (this.strokeWeight > 0.3) {
        //     this.strokeWeight -= this.settings.strokeWeightDecreaseSpeed;
        // }

        //strokeWeight(this.strokeWeight);
        // NO STROKE DECREASE
        strokeWeight(this.settings.getStrokeWeight());

        let strokeColor = this.settings.getStrokeColor();
        stroke(strokeColor);
        noFill();
        line(this.x, this.y, this.prevX, this.prevY);
    }

    this._dropPaintWithSplashes = function () {
        // Settings
        // Moderate
        // let splashMaxDist = -1;
        // let splashChance = 0.05;
        // let splashMinWeight = 0.005;
        // let splashMaxWeight = 3;
        // let strokeReductionChance = 0.05;
        // let splashLineMaxDist = 3;
        // let lineChance = 0;

        // Messy
        // let splashMaxDist = 5;
        // let splashChance = 0.15;
        // let splashMinWeight = 0.01;
        // let splashMaxWeight = 7;
        // let strokeReductionChance = 0.3;
        // let splashLineMaxDist = 20;
        // let lineChance = 0.2;

        // Spike
        let splashMaxDist = 5;
        let splashChance = 0.15;
        let splashMinWeight = 0.01;
        let splashMaxWeight = 7;
        let strokeReductionChance = 0.3;
        let splashLineMaxDist = 50;
        let lineChance = 1;

        // Draw normal line
        let strokeColor = this.settings.getStrokeColor();
        stroke(strokeColor);
        if (random(0, 1) < strokeReductionChance) {
            strokeWeight(this.settings.getStrokeWeight() - 1);
        } else {
            strokeWeight(this.settings.getStrokeWeight());
        }

        noFill();
        line(this.x, this.y, this.prevX, this.prevY);

        // Draw splashes
        if (random(0, 1) > splashChance) {
            return;
        }

        let lineVect = createVector(this.x - this.prevX, this.y - this.prevY);
        let lineVectPerp = createVector(lineVect.y, -lineVect.x);
        lineVectPerp.normalize();

        if (random(0, 1) > lineChance) {
            // Draw splash with points
            let myStrokeWeight = this.settings.getStrokeWeight();
            let splashDistWithWeight = splashMaxDist + myStrokeWeight;
            var dist = random(-splashDistWithWeight, splashDistWithWeight);
            lineVectPerp = lineVectPerp.mult(dist);

            strokeWeight(random(splashMinWeight, splashMaxWeight));
            point(this.x + lineVectPerp.x, this.y + lineVectPerp.y);
        } else {
            // Draw splash with line
            lineVectPerp = lineVectPerp.rotate(random(-PI, PI));

            let myStrokeWeight = this.settings.getStrokeWeight();
            let splashDistWithWeight = splashLineMaxDist + myStrokeWeight;
            var dist = random(-splashDistWithWeight, splashDistWithWeight);

            lineVectPerp = lineVectPerp.mult(dist);

            let startWeight = 2;
            let endWeight = 0.5;
            let distStep = 0.025;

            let numSteps = (startWeight - endWeight) / distStep;
            let weigthStep = (startWeight - endWeight) / numSteps;
            let displacementVectForStep = lineVectPerp.div(numSteps);
            let curDisplacementVect = displacementVectForStep.copy();

            let curWeight = startWeight;
            //let rotation = random(-0.08, 0.08);

            for (var i = 0; i < numSteps; i++) {
                strokeWeight(curWeight);
                point(this.x + curDisplacementVect.x, this.y + curDisplacementVect.y);
                curDisplacementVect = curDisplacementVect.add(displacementVectForStep);
                curWeight -= weigthStep;
                //curDisplacementVect = curDisplacementVect.rotate(rotation);
            }
        }

    }
}
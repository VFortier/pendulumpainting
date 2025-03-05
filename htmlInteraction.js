

function bindHTMLEvents(settings) {
    let resetBtn = select("#resetBtn");
    resetBtn.mousePressed(resetBtnPressed);

    bindInputChanged(settings);
}

function bindInputChanged(settings) {
    let rotationSpeedElem = select("#rotationSpeed");
    rotationSpeedElem.input(function () {
        settings.pendulum.rotationSpeed = this.value();
        paintPendulum.rotationSpeed = settings.pendulum.getRotationSpeed();
    });

    let rotationReductFactorElem = select("#rotationReductFactor");
    rotationReductFactorElem.input(function () {
        settings.pendulum.rotationReductFactor = this.value();
    });

    let xRadiusElem = select("#xRadius");
    xRadiusElem.input(function () {
        settings.pendulum.xRadius = this.value();
        paintPendulum.xRadius = settings.pendulum.getXRadius();
    });

    let yRadiusElem = select("#yRadius");
    yRadiusElem.input(function () {
        settings.pendulum.yRadius = this.value();
        paintPendulum.yRadius = settings.pendulum.getYRadius();
    });

    let radiusReductSpeedElem = select("#radiusReductSpeed");
    radiusReductSpeedElem.input(function () {
        settings.pendulum.radiusReductSpeed = this.value();
    });

    let centerXElem = select("#centerX");
    centerXElem.input(function () {
        settings.pendulum.centerX = this.value();
    });

    let centerYElem = select("#centerY");
    centerYElem.input(function () {
        settings.pendulum.centerY = this.value();
    });

    let globalSpeedElem = select("#globalSpeed");
    globalSpeedElem.input(function () {
        settings.pendulum.globalSpeed = this.value();
    });

    let strokeColorElem = select("#strokeColor");
    strokeColorElem.input(function () {
        settings.pendulum.strokeColor = this.value();
    });

    let backgroundColorElem = select("#bgColor");
    backgroundColorElem.input(function () {
        settings.bg.backgroundColor = this.value();
    });

    let swingingLengthElem = select("#swingingLength");
    swingingLengthElem.input(function () {
        settings.pendulum.swingingLength = this.value();
    });

    let swingingSpeedElem = select("#swingingSpeed");
    swingingSpeedElem.input(function () {
        settings.pendulum.swingingSpeed = this.value();

    });

    let startAngleElem = select("#startAngle");
    startAngleElem.input(function () {
        settings.pendulum.startAngle = this.value();
    });
}

function bindSettingsToHTML(settings) {
    let rotationSpeedElem = select("#rotationSpeed");
    rotationSpeedElem.value(settings.pendulum.rotationSpeed);

    let rotationReductFactorElem = select("#rotationReductFactor");
    rotationReductFactorElem.value(settings.pendulum.rotationReductFactor);

    let xRadiusElem = select("#xRadius");
    xRadiusElem.value(settings.pendulum.xRadius);

    let yRadiusElem = select("#yRadius");
    yRadiusElem.value(settings.pendulum.yRadius);

    let radiusReductSpeedElem = select("#radiusReductSpeed");
    radiusReductSpeedElem.value(settings.pendulum.radiusReductSpeed);

    let centerXElem = select("#centerX");
    centerXElem.value(settings.pendulum.centerX);

    let centerYElem = select("#centerY");
    centerYElem.value(settings.pendulum.centerY);

    let globalSpeedElem = select("#globalSpeed");
    globalSpeedElem.value(settings.pendulum.globalSpeed);

    let strokeColorElem = select("#strokeColor");
    strokeColorElem.value(settings.pendulum.strokeColor);

    let backgroundColorElem = select("#bgColor");
    backgroundColorElem.value(settings.bg.backgroundColor);

    let swingingLengthElem = select("#swingingLength");
    swingingLengthElem.value(settings.pendulum.swingingLength);

    let swingingSpeedElem = select("#swingingSpeed");
    swingingSpeedElem.value(settings.pendulum.swingingSpeed);

    let startAngleElem = select("#startAngle");
    startAngleElem.value(settings.pendulum.startAngle);
}
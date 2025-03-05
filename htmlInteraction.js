

function bindHTMLEvents(settings) {
    let resetBtn = select("#resetBtn");
    resetBtn.mousePressed(resetBtnPressed);

    bindInputChanged(settings);
}

function bindInputChanged(settings) {
    let rotationSpeedElem = select("#rotationSpeed");
    rotationSpeedElem.input(function () {
        settings.rotationSpeed = this.value();
        paintPendulum.rotationSpeed = settings.getRotationSpeed();
    });

    let rotationReductFactorElem = select("#rotationReductFactor");
    rotationReductFactorElem.input(function () {
        settings.rotationReductFactor = this.value();
    });

    let xRadiusElem = select("#xRadius");
    xRadiusElem.input(function () {
        settings.xRadius = this.value();
        paintPendulum.xRadius = settings.getXRadius();
    });

    let yRadiusElem = select("#yRadius");
    yRadiusElem.input(function () {
        settings.yRadius = this.value();
        paintPendulum.yRadius = settings.getYRadius();
    });

    let radiusReductSpeedElem = select("#radiusReductSpeed");
    radiusReductSpeedElem.input(function () {
        settings.radiusReductSpeed = this.value();
    });

    let centerXElem = select("#centerX");
    centerXElem.input(function () {
        settings.centerX = this.value();
    });

    let centerYElem = select("#centerY");
    centerYElem.input(function () {
        settings.centerY = this.value();
    });

    let globalSpeedElem = select("#globalSpeed");
    globalSpeedElem.input(function () {
        settings.globalSpeed = this.value();
    });

    let strokeColorElem = select("#strokeColor");
    strokeColorElem.input(function () {
        settings.strokeColor = this.value();
    });
}

function bindSettingsToHTML(settings) {
    let rotationSpeedElem = select("#rotationSpeed");
    rotationSpeedElem.value(settings.rotationSpeed);

    let rotationReductFactorElem = select("#rotationReductFactor");
    rotationReductFactorElem.value(settings.rotationReductFactor);

    let xRadiusElem = select("#xRadius");
    xRadiusElem.value(settings.xRadius);

    let yRadiusElem = select("#yRadius");
    yRadiusElem.value(settings.yRadius);

    let radiusReductSpeedElem = select("#radiusReductSpeed");
    radiusReductSpeedElem.value(settings.radiusReductSpeed);

    let centerXElem = select("#centerX");
    centerXElem.value(settings.centerX);

    let centerYElem = select("#centerY");
    centerYElem.value(settings.centerY);

    let globalSpeedElem = select("#globalSpeed");
    globalSpeedElem.value(settings.globalSpeed);

    let strokeColorElem = select("#strokeColor");
    strokeColorElem.value(settings.strokeColor);
}
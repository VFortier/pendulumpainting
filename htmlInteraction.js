$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    // Doesn't improve my offset problem where tooltip are way above button :(
    // $('[data-toggle="tooltip"]').tooltip({ container: '#testid' });
})


function bindHTMLEvents(settings) {
    let resetBtn = select("#resetBtn");
    resetBtn.mousePressed(resetBtnPressed);

    let resetPendulumBtn = select("#resetPendulumBtn");
    resetPendulumBtn.mousePressed(resetPendulumBtnPressed);

    let saveAsImageBtn = select("#saveAsImageBtn");
    saveAsImageBtn.mousePressed(saveAsImageBtnPressed);

    let defaultSettingsBtn = select("#defaultSettingsBtn");
    defaultSettingsBtn.mousePressed(defaultSettingsBtnPressed);

    bindInputChanged(settings);
}

function bindInputChanged(settings) {
    let rotationSpeedElem = select("#rotationSpeed");
    rotationSpeedElem.input(function () {
        if (this.value() === "") {
            return;
        }
        settings.pendulum.rotationSpeed = this.value();
        paintPendulum.rotationSpeed = settings.pendulum.getRotationSpeed();
        settings.saveAsCookie();

    });

    let rotationReductFactorElem = select("#rotationReductFactor");
    rotationReductFactorElem.input(function () {
        if (this.value() === "") {
            return;
        }
        settings.pendulum.rotationReductFactor = this.value();
        settings.saveAsCookie();
    });

    let xRadiusElem = select("#xRadius");
    xRadiusElem.input(function () {
        if (this.value() === "") {
            return;
        }
        settings.pendulum.xRadius = this.value();
        paintPendulum.xRadius = settings.pendulum.getInitXRadius();
        settings.saveAsCookie();
    });

    let yRadiusElem = select("#yRadius");
    yRadiusElem.input(function () {

        if (this.value() === "") {
            return;
        }
        settings.pendulum.yRadius = this.value();
        paintPendulum.yRadius = settings.pendulum.getInitYRadius();
        settings.saveAsCookie();
    });

    let radiusReductSpeedElem = select("#radiusReductSpeed");
    radiusReductSpeedElem.input(function () {
        if (this.value() === "") {
            return;
        }

        settings.pendulum.radiusReductSpeed = this.value();
        settings.saveAsCookie();
    });

    let centerXElem = select("#centerX");
    centerXElem.input(function () {
        if (this.value() === "") {
            return;
        }

        settings.pendulum.centerX = this.value();
        settings.saveAsCookie();
    });

    let centerYElem = select("#centerY");
    centerYElem.input(function () {
        if (this.value() === "") {
            return;
        }

        settings.pendulum.centerY = this.value();
        settings.saveAsCookie();
    });

    let globalSpeedElem = select("#globalSpeed");
    globalSpeedElem.input(function () {
        if (this.value() === "") {
            return;
        }

        settings.pendulum.globalSpeed = this.value();
        settings.saveAsCookie();
    });

    let strokeColorElem = select("#strokeColor");
    strokeColorElem.input(function () {
        if (validateColor(this.value())) {
            settings.pendulum.strokeColor = this.value();
        }
        settings.saveAsCookie();
    });

    let strokeWeightElem = select("#strokeWeight");
    strokeWeightElem.input(function () {
        if (this.value() === "") {
            return;
        }

        settings.pendulum.strokeWeight = this.value();
        settings.saveAsCookie();
    });

    let swingingLengthElem = select("#swingingLength");
    swingingLengthElem.input(function () {
        if (this.value() === "") {
            return;
        }

        settings.pendulum.swingingLength = this.value();
        settings.saveAsCookie();
    });

    let swingingSpeedElem = select("#swingingSpeed");
    swingingSpeedElem.input(function () {
        if (this.value() === "") {
            return;
        }

        settings.pendulum.swingingSpeed = this.value();
        settings.saveAsCookie();

    });

    let startAngleElem = select("#startAngle");
    startAngleElem.input(function () {
        if (this.value() === "") {
            return;
        }

        settings.pendulum.startAngle = this.value();
        settings.saveAsCookie();
    });

    let backgroundColorElem = select("#bgColor");
    backgroundColorElem.input(function () {
        if (validateColor(this.value())) {
            settings.bg.bgColor = this.value();
            settings.saveAsCookie();
        }
    });

    let backgroundHighlightsElem = select("#highlightsColor");
    backgroundHighlightsElem.input(function () {
        if (validateColor(this.value())) {
            settings.bg.highlightsColor = this.value();
            settings.saveAsCookie();
        }
    });

    let backgroundHighlightsThresholdElem = select("#highlightsThreshold");
    backgroundHighlightsThresholdElem.input(function () {
        if (this.value() === "") {
            return;
        }

        settings.bg.highlightsThreshold = this.value();
        settings.saveAsCookie();
    });

    let backgroundHighlightsDetailElem = select("#highlightsDetail");
    backgroundHighlightsDetailElem.input(function () {
        if (this.value() === "") {
            return;
        }

        settings.bg.highlightsDetail = this.value();
        settings.saveAsCookie();
    });

    let highlightStretchElem = select("#highlightsStretch");
    highlightStretchElem.input(function () {
        if (this.value() === "") {
            return;
        }

        settings.bg.highlightsStretch = this.value();
        settings.saveAsCookie();
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

    let strokeWeightElem = select("#strokeWeight");
    strokeWeightElem.value(settings.pendulum.strokeWeight);

    let swingingLengthElem = select("#swingingLength");
    swingingLengthElem.value(settings.pendulum.swingingLength);

    let swingingSpeedElem = select("#swingingSpeed");
    swingingSpeedElem.value(settings.pendulum.swingingSpeed);

    let startAngleElem = select("#startAngle");
    startAngleElem.value(settings.pendulum.startAngle);

    let backgroundColorElem = select("#bgColor");
    backgroundColorElem.value(settings.bg.bgColor);

    let backgroundHighlightsElem = select("#highlightsColor");
    backgroundHighlightsElem.value(settings.bg.highlightsColor);

    let backgroundHighlightsThresholdElem = select("#highlightsThreshold");
    backgroundHighlightsThresholdElem.value(settings.bg.highlightsThreshold);

    let backgroundHighlightsDetailElem = select("#highlightsDetail");
    backgroundHighlightsDetailElem.value(settings.bg.highlightsDetail);

    let highlightStretchElem = select("#highlightsStretch");
    highlightStretchElem.value(settings.bg.highlightsStretch);
}

function validateColor(colValue) {
    var regex = /^[0-9A-Fa-f]{6}$/;

    if (regex.test(colValue)) {
        return true;
    } else {
        return false;
    }
}


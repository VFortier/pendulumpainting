function GlobalSettings(pendulumSettings, bgSettings) {
    this.pendulum = pendulumSettings;
    this.bg = bgSettings;

    this.toJSON = function () {
        return {
            pendulum: this.pendulum.toJSON(),
            bg: this.bg.toJSON(),
        };
    }

    this.loadFromCookie = function () {
        var cookie = document.cookie;
        var cookieArray = cookie.split(";");
        var settingsString = "";
        for (var i = 0; i < cookieArray.length; i++) {
            if (cookieArray[i].includes("settings=")) {
                settingsString = cookieArray[i].substring(9);
                break;
            }
        }

        if (settingsString !== "") {
            return this.fromJSON(JSON.parse(settingsString));
        }

        return null;
    }


    this.fromJSON = function (json) {
        var pendulumSettings = new PaintPendulumSettings();
        pendulumSettings.fromJSON(json.pendulum);
        this.pendulum = pendulumSettings;

        var bgSettings = new BackgroundSettings();
        bgSettings.fromJSON(json.bg);
        this.bg = bgSettings;

        return this;
    }

    this.saveAsCookie = function () {
        var json = this.toJSON();
        var jsonString = JSON.stringify(json);
        document.cookie = "settings=" + jsonString;
    }
}


function PaintPendulumSettings(
    isRealTime,
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
    startAngle,
    minRadius,
    minRotationSpeed,
    maxPointCount) {

    this.isRealTime = isRealTime;
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
    this.minRadius = minRadius;
    this.minRotationSpeed = minRotationSpeed;
    this.maxPointCount = maxPointCount;

    this.pointsPerFrame = 10;

    this.toJSON = toJSON;
    this.fromJSON = fromJSON;

    this.getIsRealTime = function () {
        return this.isRealTime;
    }

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

    this.getMinRadius = function () {
        return this.minRadius;
    }

    this.getMinRotationSpeed = function () {
        return this.minRotationSpeed;
    }

    this.getMaxPointCount = function () {
        return this.maxPointCount;
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

    this.toJSON = toJSON;
    this.fromJSON = fromJSON;

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

function toJSON() {
    // generate JSON object dynamically using only non-function, non-prototype properties
    var json = {};
    for (var key in this) {
        if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
            json[key] = this[key];
        }
    }
    return json;
}

function fromJSON(json) {
    for (var key in json) {
        this[key] = json[key];
    }
    return this;
}

function settingsCookieExists() {
    var cookie = document.cookie;
    return cookie.includes("settings=");
}
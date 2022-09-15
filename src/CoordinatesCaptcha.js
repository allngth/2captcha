const {Captcha} = require("./Captcha");

class CoordinatesCaptcha extends Captcha {
    /**
     * 1 - defines that you're sending recatcha as image
     * @type {number}
     */
    coordinatescaptcha = 1;
}

exports.CoordinatesCaptcha = CoordinatesCaptcha;
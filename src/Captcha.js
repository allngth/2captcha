const {AbstractCaptcha} = require("./AbstractCaptcha");

class Captcha extends AbstractCaptcha {
    /**
     * post - defines that you're sending an image with multipart form
     * base64 - defines that you're sending a base64 encoded image
     * @type {string}
     */
    method = '';
    /**
     * Captcha image file. Required if you submit image as a file (method=post)
     * @type {Buffer}
     */
    file;
    /**
     * Base64-encoded captcha image. Required if you submit image as Base64-encoded string (method=base64)
     * @type {string}
     */
    body = '';
    /**
     * 0 - captcha contains one word
     * 1 - captcha contains two or more words
     * @type {number}
     */
    phrase = 0;
    /**
     * 0 - captcha in not case sensitive
     * 1 - captcha is case sensitive
     * @type {number}
     */
    regsense = 0;
    /**
     * 0 - not specified
     * 1 - captcha contains only numbers
     * 2 - captcha contains only letters
     * 3 - captcha contains only numbers OR only letters
     * 4 - captcha MUST contain both numbers AND letters
     * @type {number}
     */
    numeric = 0;
    /**
     * 0 - not specified
     * 1 - captcha requires calculation (e.g. type the result 4 + 8 = )
     * @type {number}
     */
    calc = 0;
    /**
     * 0 - not specified
     * 1..20 - minimal number of symbols in captcha
     * @type {number}
     */
    min_len = 0;
    /**
     * 0 - not specified
     * 1..20 - maximal number of symbols in captcha
     * @type {number}
     */
    max_len = 0;
    /**
     * 0 - not specified
     * 1 - Cyrillic captcha
     * 2 - Latin captcha
     * @type {number}
     */
    language = 0;
    /**
     * Language code. See the list of supported languages - https://2captcha.com/2captcha-api#language
     * @type {string}
     */
    lang;
    /**
     * Text will be shown to worker to help him to solve the captcha correctly.
     * For example: type red symbols only.
     * @type {string}
     */
    textinstructions;
    /**
     * Image with instruction for solving reCAPTCHA.
     * Not required if you're sending instruction as text with textinstructions.
     * @type {string}
     */
    imginstructions;
}

exports.Captcha = Captcha;
const {AbstractCaptcha} = require("./AbstractCaptcha");

class HCaptcha extends AbstractCaptcha {
    /**
     * hcaptcha - defines that you're sending hCaptcha
     * @type {string}
     */
    method = 'hcaptcha';
    /**
     * Value of data-sitekey parameter you found on page
     * @type string
     */
    sitekey;
    /**
     * Full URL of the page where you bypass the captcha
     * @type string
     */
    pageurl;
    /**
     * Use 1 for invisible version of hcaptcha. Currently it is a very rare case.
     * @type {number}
     */
    invisible = 0;
    /**
     * Domain used to load the captcha: hcaptcha.com or js.hcaptcha.com
     * @type string
     */
    domain = 'hcaptcha.com';
    /**
     * Custom data that is used in some implementations of hCaptcha, mostly with invisible=1. In most cases you see it as rqdata inside network requests.
     * IMPORTANT: you MUST provide userAgent if you submit captcha with data paramater. The value should match the User-Agent you use when interacting with the target website.
     * @type string
     */
    data;
    /**
     * Your userAgent that will be passed to our worker and used to solve the captcha.
     * Required for hCaptcha with data parameter.
     * @type string
     */
    userAgent;
}

exports.HCaptcha = HCaptcha;
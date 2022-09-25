const {WebSocketRequest} = require("./WebSocketRequest");

class TikTokCaptcha extends WebSocketRequest {
    method = 'tiktok';
    /**
     * Full URL of page where you bypass the captcha.
     * @type string
     */
    url;
    /**
     * Additional captcha options
     * @type TikTokOptions
     * */
    options;
    /**
     * Your proxy
     * @type CaptchaProxy
     */
    proxy;
}

exports.TikTokCaptcha = TikTokCaptcha;
class TikTokOptions {
    /**
     * Value of aid parameter for the page where you bypass the captcha.
     * @type number
     */
    aid;
    /**
     * Value of host parameter for the page where you bypass the captcha.
     * @type string
     */
    host;
    /**
     * Your cookies that will be used to solve the captcha
     * @type TikTokOptionsCookie[]
     */
    cookies = [];
}

exports.TikTokOptions = TikTokOptions;
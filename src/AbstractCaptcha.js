class AbstractCaptcha {
    /**
     * your API key
     * @type {string}
     */
    key = '';
    /**
     * 0 - disabled
     * 1 - enabled.
     * If enabled in.php will include Access-Control-Allow-Origin:* header in the response.
     * Used for cross-domain AJAX requests in web applications.
     * @type {number}
     */
    header_acao = 0;
    /**
     * URL for pingback (callback) response that will be sent when captcha is solved.
     * URL should be registered on the server. More info here - https://2captcha.com/2captcha-api#pingback
     * @type {string}
     */
    pingback;
    /**
     * 0 - server will send the response as plain text
     * 1 - tells the server to send the response as JSON
     * @type {number}
     */
    json = 0;
    /**
     * ID of software developer. Developers who integrated their software with 2captcha get reward: 10% of spendings of
     * their software users.
     * @type {number}
     */
    soft_id;
    /**
     * Format: login:password@123.123.123.123:3128
     * You can find more info about proxies here - https://2captcha.com/2captcha-api#proxies
     * @type {string}
     */
    proxy;
    /**
     * Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5.
     * @type {string}
     */
    proxytype;
}

exports.AbstractCaptcha = AbstractCaptcha;
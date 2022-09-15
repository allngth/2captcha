class Captcha {
    /**
     * your API key
     * @type {string}
     */
    key = '';
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
    file = '';
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
    lang = undefined;
    /**
     * Text will be shown to worker to help him to solve the captcha correctly.
     * For example: type red symbols only.
     * @type {string}
     */
    textinstructions = undefined;
    /**
     * Image with instruction for solving reCAPTCHA.
     * Not required if you're sending instruction as text with textinstructions.
     * @type {string}
     */
    imginstructions = undefined;
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
    pingback = undefined;
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
    soft_id = undefined;
    /**
     * Format: login:password@123.123.123.123:3128
     * You can find more info about proxies here - https://2captcha.com/2captcha-api#proxies
     * @type {string}
     */
    proxy = undefined;
    /**
     * Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5.
     * @type {string}
     */
    proxytype = undefined;
}

exports.Captcha = Captcha;
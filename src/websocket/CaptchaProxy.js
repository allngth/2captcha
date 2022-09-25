class CaptchaProxy {
    /**
     * Proxy type: HTTP, HTTPS, SOCKS4, SOCKS5.
     * @type string
     */
    type;
    /**
     * IP authentication: IP_address:PORT.
     * Login and password authentication: login:password@IP_address:PORT
     * @type string
     */
    uri;
}

exports.Proxy = CaptchaProxy;
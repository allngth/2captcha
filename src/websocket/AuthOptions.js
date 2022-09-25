class AuthOptions {
    /**
     * Send the response to all opened WebSocket sessions
     * @type {boolean}
     */
    allSessions = true;
    /**
     * Do not send the confirmation of successfully accepted requests.
     * @type {boolean}
     */
    suppressSuccess = true; // todo: process confirmations
}

exports.AuthOptions = AuthOptions;
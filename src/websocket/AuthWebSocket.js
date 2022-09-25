const {WebSocketRequest} = require('./WebSocketRequest')
const {AuthOptions} = require("./AuthOptions");

class AuthWebSocket extends WebSocketRequest {
    method = 'auth';
    /**
     * Session options
     * @type AuthOptions
     */
    options = new AuthOptions();
    /**
     * Your ApiKey
     * @type string
     */
    key;
}

exports.AuthWebSocket = AuthWebSocket;
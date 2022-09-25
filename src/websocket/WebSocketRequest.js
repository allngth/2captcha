const { v4: uuidv4 } = require('uuid');

class WebSocketRequest {
    /**
     * Any string (more info).
     * @type string
     */
    requestId;

    constructor() {
        this.requestId = uuidv4();
    }
}

exports.WebSocketRequest = WebSocketRequest;
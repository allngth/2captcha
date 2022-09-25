const {WebSocket} = require('ws');
const {AuthWebSocket} = require("./AuthWebSocket");

class SolverWebSocket {
    requestMap = {};

    constructor(apiKey) {
        this.apiKey = apiKey;
        this.url = 'wss://s.2captcha.com/';
    }

    async connect() {
        await (new Promise(resolve => {
            this.ws = new WebSocket(this.url);

            this.ws.on('open', _ => {
                resolve();
            });
        }));

        this.ws.on('message', data => {
            this.onMessage(data);
        });

        const authRequest = new AuthWebSocket;
        authRequest.key = this.apiKey;

        await this.send(authRequest);
    }

    async send(message) {
        return new Promise((resolve, reject) => {
            this.requestMap[message.requestId] = {resolve, reject};
            message.options.softId = 3486;

            console.log('Send', message);

            this.ws.send(JSON.stringify(message));
        })
    }

    onMessage(data) {
        data = JSON.parse(data);

        console.log('On Message', data);

        if (!data.requestId) {
            return;
        }

        if (!this.requestMap[data.requestId]) {
            return;
        }

        if (data.success) {
            this.requestMap[data.requestId].resolve(data);
        } else {
            this.requestMap[data.requestId].reject(data);
        }
    }
}

exports.SolverWebSocket = SolverWebSocket;
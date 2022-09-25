const axios = require('axios').default;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

class Solver {
    url = 'https://2captcha.com';

    constructor(apiKey, options = {}) {
        this.apiKey = apiKey;
    }

    /**
     * @param {Captcha} captcha
     * @returns {Promise<number>}
     */
    async in(captcha) {
        captcha.key = this.apiKey;
        captcha.json = 1;
        captcha.soft_id = 3486;

        const result = await axios.post(this.url + '/in.php', JSON.parse(JSON.stringify(captcha)), {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (result.data.status === 0) {
            throw Error(result.data.error_text);
        }

        return result.data.request;
    }

    /**
     * @param {number} request - request id from Solver::in
     * @param {number} interval - check result interval, in seconds
     * @param {number} timeout - waiting for result timeout, in seconds
     *
     * @returns {Promise<void>}
     */
    async res(request, interval = 5, timeout = 60) {
        let startTimestamp = Math.floor(Date.now() / 1000);

        while (Math.floor(Date.now() / 1000) - startTimestamp < timeout) {
            const result = await axios.post(this.url + '/res.php', {
                key: this.apiKey,
                action: 'get',
                id: request,
                json: 1,
                header_acao: 0,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (result.data.status === 1) {
                return result.data.request;
            }

            if (result.data.status === 0 && result.data.request !== 'CAPCHA_NOT_READY') {
                throw Error(result.data.request);
            }

            await sleep(interval * 1000);
        }
    }
}

exports.Solver = Solver;
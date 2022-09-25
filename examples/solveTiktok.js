const {SolverWebSocket} = require('../src/websocket/SolverWebSocket');
const {TikTokCaptcha} = require("../src/websocket/TikTokCaptcha");
const {TikTokOptions} = require("../src/websocket/TikTokOptions");
const {TikTokOptionsCookie} = require("../src/websocket/TikTokOptionsCookie");

(async function () {
    const solver = new SolverWebSocket('<your api key>');
    await solver.connect();

    const tiktokCaptcha = new TikTokCaptcha();

    tiktokCaptcha.url = 'https://www.tiktok.com/login/phone-or-email/email';
    tiktokCaptcha.options = new TikTokOptions();
    tiktokCaptcha.options.aid = 1459;
    tiktokCaptcha.options.host = 'https://www-useast1a.tiktok.com';
    tiktokCaptcha.options.cookies = [
        new TikTokOptionsCookie('name1', 'value1'),
        new TikTokOptionsCookie('name2', 'value2'),
        new TikTokOptionsCookie('name3', 'value3'),
    ];

    const result = await solver.send(tiktokCaptcha);

    console.log(result);

    // Close connection only after script is done, you can solve as many captchas in one connection as you want
    solver.ws.close();
    console.log('Done');
})()
const {Solver} = require('../src/Solver');
const {HCaptcha} = require("../src/HCaptcha");

(async function () {
    const solver = new Solver('<your api key>');
    const captcha = new HCaptcha();
    captcha.sitekey = '<site key>';
    captcha.pageurl = 'https://some_url.com';

    const request = await solver.in(captcha);
    await solver.res(request);
})()
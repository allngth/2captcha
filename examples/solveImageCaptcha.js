const {Solver} = require('../src/Solver');
const fs = require("fs");
const {Captcha} = require("../src/Captcha");

(async function () {
    const captchaImage = await fs.readFileSync(__dirname + '/captcha.png');
    const solver = new Solver('<your api key>');
    const captcha = new Captcha();
    captcha.method = 'post';
    captcha.body = captchaImage;
    const request = await solver.in(captcha);
    await solver.res(request);
})()
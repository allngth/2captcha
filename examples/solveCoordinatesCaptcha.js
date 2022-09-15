const {Solver} = require('../src/Solver');
const fs = require("fs");
const {CoordinatesCaptcha} = require("../src/CoordinatesCaptcha");

(async function () {
    const captchaImage = await fs.readFileSync(__dirname + '/coordinates.png');
    const solver = new Solver('a075dd3abbf8b75b3f88d7368a96091c');
    const captcha = new CoordinatesCaptcha();
    captcha.method = 'base64';
    captcha.body = captchaImage.toString('base64');
    const request = await solver.in(captcha);
    const result = await solver.res(request);
    console.log(result);
})()
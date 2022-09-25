const {SolverWebSocket} = require('../src/websocket/SolverWebSocket');

(async function () {
    const solver = new SolverWebSocket('<your api key>');
    await solver.connect();

    // ...

    // Close connection only after script is done, you can solve as many captchas in one connection as you want
    solver.ws.close();
    console.log('Done');
})()
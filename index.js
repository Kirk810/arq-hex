const config = require('config-yml');
const server = require('./src/server/index');
const magic = require('./src/utils/magic');

server.listen(config.port, () => {
    magic.logInfo(`Server running on http://localhost:${config.port}`);
});

server.on('error', (err) => {
    magic.logDanger(err);
});
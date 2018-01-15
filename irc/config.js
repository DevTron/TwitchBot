module.exports = {
    options: {
        debug: false
    },
    conncetion: {
        reconnect: true
    },
    identity: {
        username: 'xpcoinbot',
        password: process.env.OAUTH
    },
    channels: ['#thedevtron']
};
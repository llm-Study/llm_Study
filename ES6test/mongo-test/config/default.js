'use strict'
module.exports = {
    port: 3000,
    url: 'mongodb://localhost:27017/test',
    session: {
        name: 'Uid',
        secret: 'Uid',
        cookie: {
            heepOnly: true,
            secure: false,
            maxAge: 1 * 24 * 60 * 60 * 1000
        }
    }
}
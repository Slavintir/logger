const colors = require('colors');
const moment = require('moment');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red',
});

const LOG_LEVELS = ['info', 'debug', 'warn', 'error'];
const DATE_FORMAT = 'YYYY-MM-DD hh:mm:ss:ms';

class Logger {
    constructor() {
        this.configuration = this.configure();
    }

    configure(configuration = { levels: LOG_LEVELS, format: DATE_FORMAT }) {
        return Object.assign(this.configuration || { }, configuration);
    }

    info(params) {
        const message = this.toString(params, 'info');

        if (typeof message === 'string') {
            console.info(message);
        }
    }

    debug(params) {
        const message = this.toString(params, 'debug');

        if (typeof message === 'string') {
            console.info(message);
        }
    }

    warn(params) {
        const message = this.toString(params, 'warn');

        if (typeof message === 'string') {
            console.info(message);
        }
    }

    error(params) {
        const message = this.toString(params, 'error');

        if (typeof message === 'string') {
            console.info(message);
        }
    }

    toString(params, level) {
        if (!this.configuration.levels.includes(level)) {
            return null;
        }

        const { message, xid, data } = params;
        const str = [this.data(level, xid), message.verbose, JSON.stringify(data)?.verbose]
            .filter(s => Boolean(s))
            .join(' - '.verbose);

        return str;
    }

    data(level, xid) {
        const time = moment().format(this.configuration.format);

        return (xid ? [time, level.toUpperCase(), `XID: ${xid}`] : [time, level.toUpperCase()]).join(' | ')[level];
    }
}

module.exports = new Logger;
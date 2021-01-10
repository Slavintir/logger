export type Xid = string | number;
export type Level = 'info' | 'debug' | 'warn' | 'error';

export interface Params {
    message: string;
    data?: object;
    xid?: Xid;
}

export interface Configuration {
    format?: string;
    levels?: Level[];
    directory?: string;
}

class Logger {
    configure(configuration: Configuration): void;
    info(params: Params): void;
    debug(params: Params): void;
    warn(params: Params): void;
    error(params: Params): void;

    private toString(params: Params, level: Level): string;
    private data(level: Level, xid: Xid): string;
}

export default new Logger();
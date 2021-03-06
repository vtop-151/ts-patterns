export default class Logger {
    private static instance: Logger;

    private constructor() {}

    public static getLogger(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }

        return Logger.instance;
    }

    public log(value: string): void {
        console.log(value);
    }
}

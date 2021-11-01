import Logger from '../Logger';

describe('Logger', () => {
    it('should be only one instance', () => {
        const logger = Logger.getLogger();
        const logger2 = Logger.getLogger();

        expect(logger).toEqual(logger2);
    });
});

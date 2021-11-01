import Builder from './Builder';

export default class Director {
    private builder: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildFullProduct(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }

    public buildBasicProduct(): void {
        this.builder.producePartA();
    }
}

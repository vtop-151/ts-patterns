import Builder from './Builder';
import Product1 from './Product1';

export default class ConcreteBuilder1 implements Builder {
    public product: Product1;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product1();
    }

    public producePartA(): void {
        this.product.setPartA(1);
    }

    public producePartB(): void {
        this.product.setPartB(2);
    }

    public producePartC(): void {
        this.product.setPartC(3);
    }

    public getProduct(): Product1 {
        const result = this.product;
        this.reset();

        return result;
    }
}

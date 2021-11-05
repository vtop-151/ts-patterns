export default class Product1 {
    private _partA: number;
    private _partB: number;
    private _partC: number;

    get partA(): number {
        return this._partA;
    }

    setPartA(partA: number): Product1 {
        this._partA = partA;
        return this;
    }

    get partB(): number {
        return this._partB;
    }

    setPartB(partB: number): Product1 {
        this._partB = partB;
        return this;
    }

    get partC(): number {
        return this._partC;
    }

    setPartC(partC: number): Product1 {
        this._partC = partC;
        return this;
    }
}

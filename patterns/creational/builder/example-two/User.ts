import UserBuilder from './UserBuilder';

export default class User {
    private _name: string;
    private _age: number;
    private _phone: string;
    private _gender: string;

    constructor(builder: UserBuilder) {
        this._name = builder.name;
        this._age = builder.age;
        this._phone = builder.phone;
        this._gender = builder.gender;
    }

    get name(): string {
        return this._name; 
    }

    get age(): number {
        return this._age;
    }

    get phone(): string {
        return this._phone;
    }

    get gender(): string {
        return this._gender;
    }
}

import { User } from './User';

export class UserBuilder {
    private _name: string;
    private _age: number;
    private _phone: string;
    private _gender: string;

    constructor(name: string) {
        this._name = name;
    }

    build(): User {
        return new User(this);
    }

    get name(): string {
        return this._name;
    }

    get age(): number {
        return this._age;
    }

    setAge(age: number): UserBuilder {
        this._age = age;
        return this;
    }

    get phone(): string {
        return this._phone;
    }

    setPhone(phone: string): UserBuilder {
        this._phone = phone;
        return this;
    }

    get gender(): string {
        return this._gender;
    }

    setGender(gender: string): UserBuilder {
        this._gender = gender;
        return this;
    }
}

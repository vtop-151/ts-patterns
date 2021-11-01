import { User } from './User';
import { UserBuilder } from './UserBuilder';

function main(): void {
    const user: User = new UserBuilder('vtop')
        .setAge(18)
        .setPhone('01100220')
        .setGender('male')
        .build();
    
    console.log(user);
}

main();

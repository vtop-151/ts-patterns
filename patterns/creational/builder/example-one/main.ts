import ConcreteBuilder1 from './ConcreteBuilder1';
import Director from './Director';

function clientCode(director: Director): void {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log('Build basic product:');
    director.buildBasicProduct();
    console.log(builder.getProduct());

    console.log('Build full product:');
    director.buildFullProduct();
    console.log(builder.getProduct());

    /* Using builder pattern without Director class */
    console.log('Build custom product:');
    builder.producePartB();
    builder.producePartC();
    console.log(builder.getProduct());
}

const director = new Director();
clientCode(director);

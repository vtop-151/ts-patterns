import { ConcreteBuilder1 } from "./ConcreteBuilder1";
import { Director } from "./Director";

function clientCode(director: Director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log('Build basic product:');
    director.buildBasicProduct();
    builder.getProduct().listParts();

    console.log('Build full product:');
    director.buildFullProduct();
    builder.getProduct().listParts();

    /* Using builder pattern without Director class */
    console.log('Build custom product:');
    builder.producePartB();
    builder.producePartC();
    builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);


// ClassDecorators
function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext) {
    console.log('logger decorator');
    console.log(target);
    console.log(ctx);
    return class extends target {
        constructor(...args: any[]) {
            super(...args);
            console.log('class constructor');
            console.log(this);
        }
    }
}


// ClassMethodDecorator
function autobind(target: (...args: any[]) => any, ctx: ClassMethodDecoratorContext) {
    ctx.addInitializer(function(this: any) {
        this[ctx.name] = this[ctx.name].bind(this);
    });

    return function(this: any) {
        console.log('Executing original function');
        target.apply(this);
    }
}

// ReplacerDecorator
function replacer<T>(initValue: T) {
    // FieldDecorators
    return function replacerDecorator(target: undefined, ctx: ClassFieldDecoratorContext) {
        console.log(target);
        console.log(ctx);
    
        return (initialValue: any) => {
            console.log(initialValue);
            return initValue;
        }
    }
}

@logger 
class Person {
    @replacer('Dennis')
    name = 'Ian';

    @autobind
    greet() {
        console.log('Hi, I am ' + this.name)
    }
}

const ian = new Person();
const greet = ian.greet;

greet();
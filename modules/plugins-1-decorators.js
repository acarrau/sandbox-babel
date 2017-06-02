function Initialized(data) {
    return function(target){
        target.prototype.initialValue = data.initialValue;     
    }
}

function asString(target, name, descriptor) {
    const value = descriptor.value;
    descriptor.value = function(...args){
        return value.apply(this, args).toString()
    };
    return descriptor
}

@Initialized({
    initialValue: 5
})
class Example {
    @asString
    sum(x, y) {
        const initialValue = this.initialValue || 0;
        return initialValue + x + y;
    } 
}

const instance = new Example();

// Will add 2 + 3, to the initial value set in the decorator.
const result = instance.sum(2, 3);

console.log("Result should be 10, since adding (2 + 3) and 5 as decorated initial value")
console.log(result)
console.log("Result should be of type string: " + typeof(result))
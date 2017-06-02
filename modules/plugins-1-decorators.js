function Initialized(data) {
    return function(target, property, descriptor){
        target.prototype.initialValue = data.initialValue;
    }
}

@Initialized({
    initialValue: 5
})
class Example {
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
numbersArray = [5, 10, 8, 22, 19, 47];
multiplierObject = {
    multiplier: 3
}

function MapWithThis(array, object){
    return array.map(function(x){
        return x * this.multiplier;
    }, object);
}

console.log(MapWithThis(numbersArray, multiplierObject))

function MapWithoutThis(array){
    return array.map(function(x){
        return x * 2;
    });
}

console.log(MapWithoutThis(numbersArray));

function Filter(array){
    return array.filter(function(x){
        return x % 2 == 0;
    })
}

console.log(Filter(numbersArray));

function Reduce(array){
    return array.reduce(function(accumulator, x){
        return accumulator + x;
    });
}

console.log(Reduce(numbersArray));
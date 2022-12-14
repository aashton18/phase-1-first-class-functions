function receivesAFunction(something) {
    let answer = "Hello World"
    something(answer);
}

let returnsAnAnonymousFunction = function() {
    return (function() {
        return "something"
    });
}
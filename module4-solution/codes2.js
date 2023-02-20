(function (win
) {
    var amirHello = {}
    amirHello.name = "Amir"
    var greeting = "Hello"
    amirHello.sayHello = function () {
        console.log(greeting + " " + amirHello.name);
    }
    window.amirHello = amirHello
})(window);
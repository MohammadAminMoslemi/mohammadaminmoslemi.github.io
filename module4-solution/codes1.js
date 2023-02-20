(function (window) {
    var aminHi = {}
    aminHi.name = "Amin"
    var greeting = "Hi"
    aminHi.sayHi = function () {
        console.log(greeting + " " + aminHi.name);
    }
    window.aminHi = aminHi
})(window)
function calculateFibonacci() {
    var n = parseInt(document.getElementById("number").value, 10);
    var result = fibonacci(n);
    document.getElementById("result").textContent = "Result: " + result;
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        var a = 0, b = 1, temp;
        for (var i = 2; i <= n; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}
var id;
var form = document.querySelector("#form")
var btn = document.querySelector("#confirm")

btn.addEventListener("submit", function(event) {


    var t = 1000

    event.preventDefault(event)
    id = setInterval(function(t) {
        if (t == 0) {
            alert("Your order is accepted ")
        }
        if (t == 3) {
            alert("Your order is being Prepared")
        }
        if (t == 8) {
            alert("Your order is being packed ")
        }
        if (t == 10) {
            alert("Your order is out for delivery ")
        }
        if (t == 12) {
            alert(" Order delivered")
        }
        if (t < 12) {
            clearintfun(id)
        }

    }, 1000)
    t++
})

function clearintfun(id) {
    clearInterval(id)
}
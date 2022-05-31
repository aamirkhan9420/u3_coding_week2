var id;
var form = document.querySelector("#form")
var btn = document.querySelector("#confirm")
var t = 0
form.addEventListener("submit", function(event) {




    event.preventDefault()
    id = setInterval(function() {

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
            alert("Your order is out for delivery")
        }
        if (t == 12) {
            alert("Order delivered")

        }
        t++
    }, 1000)

})

// function clearintfun(id) {
//     clearInterval(id)
// }
// On clicking remove button the item should be removed from DOM as well as localstorage.

var count = 1
var arr = JSON.parse(localStorage.getItem("coffee")) || []
appenddata(arr)

function appenddata(arr) {
    var menu = document.querySelector("#bucket")
    menu.innerHTML = null
    arr.forEach(function(elem, index) {
        var totalprice = document.querySelector("#total-div")
        totalprice.innerHTML = "Total -" + (elem.price * count++) + "Rs"
        console.log(elem)
        var div1 = document.createElement("div")
        var img = document.createElement("img")
        img.src = elem.image
        var title = document.createElement("h1")
        title.innerText = elem.title
        var price = document.createElement("h1")
        price.innerText = elem.price

        var Removebuck = document.createElement("button")
        Removebuck.setAttribute("id", "remove_coffee")
        Removebuck.innerText = "Remove_coffee"
        Removebuck.addEventListener("click", function() {
            removebuck(elem, index)
        })
        div1.append(img, title, price, Removebuck)
        bucket.append(div1)
    });

}

function removebuck(elem, index) {
    arr.splice(index, 1)
    localStorage.setItem("coffee", JSON.stringify(arr))
    window.location.reload();
    count--
}
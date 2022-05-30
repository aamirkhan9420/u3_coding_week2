// Add the coffee to local storage with key "coffee"
// api = `https://masai-mock-api.herokuapp.com/coffee/menu`

var arr = JSON.parse(localStorage.getItem("coffee")) || []
async function fetchdata() {

    try {
        var x = await fetch("https://masai-mock-api.herokuapp.com/coffee/menu")
        var y = await x.json()
        var data1 = y.menu.data
        appenddata(data1)
        console.log(data1)
    } catch (err) {
        console.log(err)
    }

}


function appenddata(data1) {
    var menu = document.querySelector("#menu")
    menu.innerHTML = null
    data1.forEach(function(elem) {

        console.log(elem)
        var div1 = document.createElement("div")
        var img = document.createElement("img")
        img.src = elem.image
        var title = document.createElement("h1")
        title.innerText = elem.title
        var price = document.createElement("h1")
        price.innerText = elem.price
        var addtobuck = document.createElement("button")
        addtobuck.setAttribute("id", "add_to_bucket")
        addtobuck.innerText = "Add_to_bucket"
        addtobuck.addEventListener("click", function() {
            addtobucket(elem)
        })
        div1.append(img, title, price, addtobuck)
        menu.append(div1)
    });

}

fetchdata()

function addtobucket(elem) {
    arr.push(elem)
    localStorage.setItem("coffee", JSON.stringify(arr))
    var bucketcount = document.querySelector("#coffee_count")
    bucketcount.innerHTML = "count-" + arr.length
}
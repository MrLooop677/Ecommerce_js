// start Defenations
let links = document.querySelector("ul#links"),
    user_info = document.querySelector("ul#user_info"),
    user = document.querySelector("a#user"),
    logout = document.querySelector("#logout"),
    badge = document.querySelector(".badge"),
    Shoppingcart = document.querySelector(".Shopping-cart"),
    cart_sproductsmenue = document.querySelector(".carts-products"),
    productsdom = document.querySelector(".products"),
    cart_sproducts = document.querySelector(".carts-products div"),
    products = JSON.parse(localStorage.getItem("products"));

// open cart menue
document.querySelector(".Shopping-cart ").addEventListener("click", opencart)

// Display Products
let Draw = function(all = []) {
    let productsUi = all.map((item) => {
        return `
        <div class="product-item">
        <img src="${item.src}" class="product-item-img" alt="">
        <div class="product-item-desc">
            <a href="cartDetails.html" onclick="getId(${item.id})">${item.title}</a>
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
            <span>Size: ${item.size} </span>
        </div>
        <div class="product-item-action">
            <button class="add-to-cart" onclick="addtocart(${item.id})">Add To Cart</button>
            <i class="far fa-heart fav"></i>
        </div>
    </div> `
    })
    productsdom.innerHTML = productsUi
}
Draw(products)




// check item in local storage
let additem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
if (additem) {
    additem.map((item) => {
        cart_sproducts.innerHTML += `<p>${item.title}</p>`;
    })
    badge.innerHTML = cart_sproducts.childElementCount
}

// addtocart function
let items = [];

function addtocart(id) {
    if (localStorage.getItem("username")) {
        let choosenitem = products.find((item) => item.id == id)
            // localStorage.setItem("productsInCart", JSON.stringify(additem))


        let item = items.find((i) => i.id == choosenitem.id)
        console.log(item)

        if (item) {
            choosenitem.qty += 1;
        } else {
            items.push(choosenitem)
        }
        cart_sproducts.innerHTML = ""
        items.forEach(element => {
            cart_sproducts.innerHTML += `<p>${element.title} ${element.qty}</p>`;

        });
        additem = [...additem, choosenitem]

        badge.innerHTML = cart_sproducts.childElementCount
    } else {
        window.location = "logIn.html";
    }

}
// end products



// visible the cart_sproductsmenue under Shopping-cart
function opencart() {
    if (cart_sproductsmenue.style.display == "block") {
        cart_sproductsmenue.style.display = "none";
    } else {
        if (cart_sproducts.childElementCount != 0) {
            cart_sproductsmenue.style.display = "Block";
        }
    }

}

// save id in database
function getId(id) {
    localStorage.setItem("productid", JSON.stringify(id))
}





// saerch function
let inp = document.getElementById("search");

inp.onkeyup = function(e) {
    if (inp.value != "") {
        search(inp.value)
        console.log("enter")

    }
    if (inp.value.trim() == "") {
        Draw(products)
    }


}

function search(inp) {

    if (products) {
        let filtered = products.filter((item) => item.title.includes(inp))
        console.log(filtered)
        localStorage.setItem("products", JSON.stringify(filtered))
        Draw(filtered)

    }
}
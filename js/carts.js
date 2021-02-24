let noproduct = document.querySelector(".noproduct")

function DrawIproductsCardsUi(allproduct = []) {
    if (JSON.parse(localStorage.getItem("productsInCart")).length === 0) {
        noproduct.innerHTML = "No Product For You"

    }
    let items = JSON.parse(localStorage.getItem("productsInCart")) || allproduct
    let productsUi = items.map((item) => {
        return `
        <div class="product-item">
        <img src="${item.src}" class="product-item-img" alt="">
        <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
            <span>Size: ${item.size} </span>
        </div>
        <div class="product-item-action">
            <button class="add-to-cart" onclick="RemoveItemFromCart(${item.id})">Remove from cart To Cart</button>
        </div>
    </div> `
    })
    productsdom.innerHTML = productsUi
}
DrawIproductsCardsUi()

function RemoveItemFromCart(id) {
    let productsInCart = localStorage.getItem("productsInCart")
    if (productsInCart) {
        let items = JSON.parse(productsInCart)
        let filtered = items.filter((item) => item.id !== id)
        localStorage.setItem("productsInCart", JSON.stringify(filtered))
        DrawIproductsCardsUi(filtered)

    }

}
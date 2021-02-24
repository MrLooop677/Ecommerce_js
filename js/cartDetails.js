let products = JSON.parse(localStorage.getItem("products")),
    productId = localStorage.getItem("productid"),
    itemDom = document.querySelector(".item-details");


// Display Products
let productDetails = products.find((item) => item.id == productId)

itemDom.innerHTML = `
<img src="${productDetails.src}" alt="" />
<h2> ${productDetails.title} </h2>
<span>Size : ${productDetails.size}</span><br>
`;
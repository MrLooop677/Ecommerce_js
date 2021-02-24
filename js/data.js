// start products 
let
    productdb = [{
            id: 1,
            src: "img/headphone.jpg",
            title: "headphone item",
            size: "large",
            qty: 1
        },
        {
            id: 2,
            src: "img/lab.jpg",
            title: "lab item",
            size: "midum",
            qty: 1
        }, {
            id: 3,
            src: "img/glasses.jpg",
            title: "glasses",
            size: "small",
            qty: 1
        }, {
            id: 4,
            src: "img/watch.jpg",
            title: "watch item",
            size: "large",
            qty: 1
        }
    ]
    // end products

// set data in database (local storage)
localStorage.setItem("products", JSON.stringify(productdb))
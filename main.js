var boxitemcontainer = document.querySelector("#boxitemcontainer")

var viewItems = items.results.map(function(product){
    return {
        title: product.title,
        shop: product.Shop.shop_name,
        price: product.price,
        image: product.Images[0].url_170x135
    }
})

var htmlitems = viewItems.map(function(item){
    return `
        <div>
            <img src="${item.image}">
            <p>"${item.title}"</p>
            <p>"${item.shop}"</p>
            <p>"${item.price}"</p>
        </div>
    `
})
htmlitems.join("")

boxitemcontainer.innerHTML = htmlitems
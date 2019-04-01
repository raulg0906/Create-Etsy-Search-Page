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
        <div class="temp">
            <img src="${item.image}">
            <p class="title1">"${item.title}"</p>
            <p class="shopname1">"${item.shop}"</p>
            <p class="price1">"${item.price}"</p>
        </div>
    `
})
htmlitems.join("")

boxitemcontainer.innerHTML = htmlitems
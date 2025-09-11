const HEADERS = {headers: {"Authorization": "Bearer " + window.localStorage.getItem("access_token")}}

function addToCart_f(product_id) {
    axios.post("https://api.everrest.educata.dev/shop/cart/product",{
        id: product_id,
        quantity: 1,
    }, HEADERS
    ).then(function(response){
        alert("product added to cart")
    }).catch(function(error){
        console.log(error)
    })
}
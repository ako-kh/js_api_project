const HEADERS = {headers: {"Authorization": "Bearer " + window.localStorage.getItem("access_token")}}

function addToCart_f(product_id, quantity=1) {
    axios.post("https://api.everrest.educata.dev/shop/cart/product",{
        id: product_id,
        quantity: quantity,
    }, HEADERS
    ).then(function(response){
        alert("product added to cart")
    }).catch(function(error){
        console.log(error)
        axios.patch("https://api.everrest.educata.dev/shop/cart/product",{
            id: product_id,
            quantity: quantity,
        }, HEADERS
        ).then(function(response){
            alert("product added to cart")
        }).catch(function(error){
            console.log(error)
        })
    })
}

function addButton(){
    let mynav = document.getElementById("mynavbar")
    if (window.localStorage.getItem("access_token") != null){
        let logout_btn = document.createElement("button")
        logout_btn.className = "btn btn-danger"
        logout_btn.innerText = "log out"
        logout_btn.onclick = function(){
            axios.post("https://api.everrest.educata.dev/auth/sign_out").then(function(response){
                window.localStorage.removeItem("access_token")
                window.location.href = "index.html"
            }).catch(function(error){
                console.log(error)
            })
        }
        mynav.appendChild(logout_btn)
    }else{
        let login_btn = document.createElement("button")
        login_btn.className = "btn btn-success"
        login_btn.innerText = "log in"
        login_btn.onclick = function(){
            window.location.href = "sign_in.html"
        }
        mynav.appendChild(login_btn)
    }
}

addButton()
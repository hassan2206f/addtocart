// let carticon = document.querySelector('#click')
// let cart = document.querySelector('#page')
// let cross = document.querySelector('#cross')

// carticon.onclick = () => {
//     cart.classList.add("active");
// };
// cross.onclick = () => {
//     cart.classList.remove("active");
// };

$(document).ready(function() {
    $("#click").click(function() {
        $("#page").addClass("active")
    })
    $("#cross").click(function() {
        $("#page").removeClass("active")
    })
})

function buy1() {
    let price = document.getElementById('product-price1').innerText;
    let title = document.getElementById('product-title1').innerText;
    let img = document.getElementById('img1').children[0].src;
    let totalprice = document.getElementById('quanity')
    let cartprice = document.getElementById('cart-price')
    let data = ""


    console.log(price)
    console.log(title)
    document.getElementById('cart-price').innerHTML = price
    document.getElementById('cartproduct').innerHTML = title
    document.getElementById('pageimg').innerHTML = `<img src="${img}" id="small"></img>`;
    updateprice();
    cartbox();

}

function buy2() {
    let price = document.getElementById('product-price2').innerText;
    let title = document.getElementById('product-title2').innerText;
    let img = document.getElementById('img2').children[0].src;


    console.log(title)
    console.log(price)
    console.log(img)
    document.getElementById('cart-price').innerHTML = price
    document.getElementById('cartproduct').innerHTML = title
    document.getElementById('pageimg').innerHTML = `<img src="${img}" id="small"></img>`;
    updateprice();
    cartbox();

}

function buy3() {
    let price = document.getElementById('product-price3').innerText;
    let title = document.getElementById('product-title3').innerText;
    let img = document.getElementById('img3').children[0].src;

    console.log(title)
    console.log(price)
    document.getElementById('cart-price').innerHTML = price
    document.getElementById('cartproduct').innerHTML = title
    document.getElementById('pageimg').innerHTML = `<img src="${img}" id="small"></img>`;
    updateprice();

}

function buy4() {
    let price = document.getElementById('product-price4').innerText;
    let title = document.getElementById('product-title4').innerText;
    let img = document.getElementById('img4').children[0].src;

    console.log(title)
    console.log(price)
    document.getElementById('cart-price').innerHTML = price
    document.getElementById('cartproduct').innerHTML = title
    document.getElementById('pageimg').innerHTML = `<img src="${img}" id="small"></img>`;
    updateprice();

}

function buy5() {
    let price = document.getElementById('product-price5').innerText;
    let title = document.getElementById('product-title5').innerText;
    let img = document.getElementById('img5').children[0].src;

    console.log(title)
    console.log(price)
    document.getElementById('cart-price').innerHTML = price
    document.getElementById('cartproduct').innerHTML = title
    document.getElementById('pageimg').innerHTML = `<img src="${img}" id="small"></img>`;
    updateprice();

}

function buy6() {
    let price = document.getElementById('product-price6').innerText;
    let title = document.getElementById('product-title6').innerText;
    let img = document.getElementById('img6').children[0].src;

    console.log(title)
    console.log(price)
    document.getElementById('cart-price').innerHTML = price
    document.getElementById('cartproduct').innerHTML = title
    document.getElementById('pageimg').innerHTML = `<img src="${img}" id="small"></img>`;
    updateprice();

}

// function updateprice() {
//     let content = document.getElementsByClassName('cart-content')[0];
//     let box = document.getElementsByClassName('cart-box')
//     let total = 0
//     for (let i = 0; i < box.length; i++) {
//         let boxes = box[i]
//         let priceelement = boxes.getElementById('cart-price')[0];
//         let quantityelement = boxes.getElementById('quantity')[0];
//         var price = parseFloat(priceelement.innerHTML.replace("RS", ""));
//         var quanity = quantityelement.value;
//         total = total + price * quanity;
//         document.getElementsByClassName("total-price")[0].innerText = "RS" + total;


//     }
//     console.log(total)
// }


// function quantitychange(event) {
//     var input = event.target;
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1
//     }
//     updateprice()
// }

// function ttl(i) {
//     updateprice()
// }



let product = "[{ \"image\": \"pic1.jpg\", \"title\": \"CRISPY ZINGER BURGER\", \"price\": 300 },   { \"image\": \"pic2.jpg\", \"title\": \"SPECIAL ZINGER BURGER\", \"price\": 460 }, { \"image\": \"pic4.jpg\", \"title\": \"CRISPY BROAST\", \"price\": 330 },   { \"image\": \"pic3.jpg\", \"title\": \"JUICY BEEF BURGER\", \"price\": 430 },    { \"image\": \"pic5.jpg\", \"title\": \"BBQ CLUB SANDWICH\", \"price\": 340 },   { \"image\": \"pic6.jpg\", \"title\": \"BBQ PLATER\", \"price\": 1350 }]";

let parsed = JSON.parse(product);




let data = "";
for (let i = 0; i < parsed.length; i++) {

    data += `<div class="col-md-4">
    <div class="product">
        <div id="img2"> <img src="${parsed[i].image}" class="product-img"></div>
        
        <h4 id="product-title2">${parsed[i].title}</h4>
        <span id="product-price2">RS${parsed[i].price}</span>
        <i class="fa fa-shopping-cart" onclick="buy(${i})" id="cart"></i>
    </div>
</div>`;


}
document.getElementById("menu-items").innerHTML = data;

var next = [];
let total = 0;

function buy(i) {
    let cart2 = ""
    total = 0;

    next.push(parsed[i])
    for (let i = 0; i < next.length; i++) {
        cart2 += ` 
        <div id="pageimg"> <img src="${next[i].image}" id="img1"</div>
        <div class="detail-box">
            <div id="cartproduct">${next[i].title}</div>
            <div id="cart-price">${next[i].price}</div>
            <input type="number" value="1" id="quantity" onclick="ttl(${i})">
            <i class="fa fa-trash delete" id="delete" onclick="delte(${i})"></i>

        </div>`


        total += parseInt(next[i].price)

    }



    document.getElementById('cart2').innerHTML = cart2;
    document.getElementById("total-price").innerHTML = total;
}

function delte(index) {
    let cart2 = "";


    // document.getElementById('cart-price').innerHTML = ""
    // document.getElementById('cartproduct').innerHTML = ""
    // document.getElementById('pageimg').innerHTML = ""
    // document.getElementById('total-price').innerHTML = ""
    // document.getElementById('quantity').value = 1

    next.splice(index, 1);

    for (let i = 0; i < next.length; i++) {
        cart2 += ` 
        <div id="pageimg"> <img src="${next[i].image}" id="img1"</div>
        <div class="detail-box">
            <div id="cartproduct">${next[i].title}</div>
            <div id="cart-price">${next[i].price}</div>
            <input type="number" value="1" id="quantity" onclick="ttl(${i})">
            <i class="fa fa-trash delete" id="delete" onclick="delte(${i})"></i>

        </div>`

    }
    document.getElementById('cart2').innerHTML = "";
    document.getElementById('cart2').innerHTML = cart2;
}



// function updateprice() {

//     let quantit = ;
//     let total = 0
//     let Total = ""
//     Total = total + price * quantit
//     console.log(Total)
//     document.getElementById('total-price').innerHTML = "RS" + Total

// }
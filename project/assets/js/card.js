let basket = {}
document.querySelectorAll('.add-to-card').forEach(el => el.onclick = addToCard)

if (localStorage.getItem('basket')) {
    basket = JSON.parse(localStorage.getItem('basket'))
    ajaxGetGoodsInfo()
}

function addToCard(e) {
    e.preventDefault();
    let id = this.dataset.goods_id
    if (basket[id]) {
        basket[id]++
    } else {
        basket[id] = 1
    }
    ajaxGetGoodsInfo()
}

function ajaxGetGoodsInfo() {
    updateLocalStorageBasket()
    fetch('/get-goods-info', {
            method: "POST",
            body: JSON.stringify({
                key: Object.keys(basket)
            }),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }
        })
        .then(function (response) {
            return response.text()
        })
        .then(function (body) {
            console.log('body', body);
            showCart(JSON.parse(body))
        })
}

function showCart(data) {
    let out = `<table class="table"><tbody>`
    let total = 0
    for (let key in basket) {
        let row = `<tr><td>
                        <a href=/goods?id=${data[key].id}>
                            ${data[key].name}
                        </a></td>
                    <td class='px-0'> <i class = 'far fa-minus-square cart-minus' data-goods_id = ${data[key].id} ></i></td>
                    <td class='px-0'> ${basket[key]}</td>
                    <td><i class='far fa-plus-square cart-plus' data-goods_id=${data[key].id}></i></td>
                    <td class='px-0'>${data[key].cost.toFixed(2) * basket[key]} uah</td>
                    </tr>`
        total += basket[key] * data[key].cost
        out += row
    }
    out += `<tr><td>Total : ${total.toFixed(2)} uah</td></tr>`
    out += '</tbody></table>'

    document.querySelector('.cart-window').innerHTML = out
    document.querySelectorAll('.cart-minus').forEach(el => el.onclick = cartMinus)
    document.querySelectorAll('.cart-plus').forEach(el => el.onclick = cartPlus)
}



function cartMinus() {
    let id = this.dataset.goods_id
}

function cartPlus() {
    let id = this.dataset.goods_id
    basket[id]++
    ajaxGetGoodsInfo()
}

function cartMinus() {
    let id = this.dataset.goods_id
    if (basket[id] - 1 > 0) {
        basket[id]--
    } else {
        delete(basket[id])
    }
    ajaxGetGoodsInfo()
}

function updateLocalStorageBasket() {
    localStorage.setItem('basket', JSON.stringify(basket))
}
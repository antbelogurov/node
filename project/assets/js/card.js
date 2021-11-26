let basket = {}
document.querySelectorAll('.add-to-card').forEach(el => el.onclick = addToCard)

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
    for (let key in data) {
        let row = `<tr><td>
                        <a href=/goods?id=${data[key].id}>
                            ${data[key].name}
                        </a></td>
                    <td class='px-0'> <i class = 'far fa-minus-square cart-minus'
                    data-goods_id = ${data[key].id} ></i></td>
                    <td class='px-0'> ${key}</td>
                     <td><i class='far fa-plus-square cart-plus'data-goods_id=${data[key].id}></i></td>
                    </tr>
                    `
        out += row

    }
    out += '</tbody></table>'
    document.querySelector('.cart-window').innerHTML = out
}
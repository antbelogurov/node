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
                    </tr>`
        out += row
        console.log(row);
        console.log(out);
    }
    out += '</tbody></table>'
    document.querySelector('.cart-window').innerHTML = out
}
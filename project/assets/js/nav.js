let nav = document.querySelector('.left-nav')
document.querySelector('#close-btn').onclick = () => nav.classList.add("close-nav");
document.querySelector('#open-menu').onclick = () => nav.classList.remove("close-nav");

function getList() {
    fetch('/get-category-list', {
            method: 'POST'
        })
        .then(response => response.text())
        .then(data => {
            showCategoryList(JSON.parse(data))
        });
}

function showCategoryList(data) {
    let out = "<ul class='footer-nav'><li><a href='/'>Main</a></li>"
    for (let i = 0; i < data.length; i++) {
        out += `<li><a href=/cat?id=${data[i]['id']} class='mt-2'>${data[i]['category']}</a></li>`
    }
    out += '</ul>'
    document.querySelector('#category-list').innerHTML = out
}
getList()
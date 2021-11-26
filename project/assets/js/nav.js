function getList() {
    fetch('/get-category-list', {
            method: 'POST'
        })
        .then((res) => res.text())
        .then(body => {
            console.log(body)
            showCategoryList(JSON.parse(body))
        })
}

function showCategoryList(data) {
    console.log('show', data)
}
getList()
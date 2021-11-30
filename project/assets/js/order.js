form.onsubmit = (e) => {
    e.preventDefault();
    let phone = document.querySelector('#phone').value.trim(),
        email = document.querySelector('#email').value.trim(),
        name = document.querySelector('#name').value.trim(),
        check = document.querySelector('#check').checked,
        form = document.querySelector('#form')

    if (!phone || !name || !check) {
        console.log('не заполнили поля');
    }
    if (check) {
        console.log('не согласились');
    }

    fetch('/finish-order', {
        method: 'POST',
        body: JSON.stringify({
            'phone': phone,
            'name': name,
            'email': email,
            'key': JSON.parse(localStorage.getItem('basket'))
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}
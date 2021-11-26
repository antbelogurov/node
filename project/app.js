// express 
let express = require('express'),
    app = express()


let mysql = require('mysql')
let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'noda'
})

app.use(express.static('assets'))
app.set('view engine', 'pug')
app.listen(3000, () => {
    console.log('node work');
})

app.get('/', (req, res) => {
    con.query('SELECT * FROM goods', (err, result) => {
        let goods = {}
        for (let i = 0; i < result.length; i++) {
            goods[result[i]['id']] = result[i]
        }
        res.render('main', {
            goods: JSON.parse(JSON.stringify(goods))
        })
    })
})

app.get('/cat', (req, res) => {
    let catId = req.query.id
    let cat = new Promise((resolve, reject) => {
        con.query('SELECT * FROM category WHERE id =' + catId, (err, result) => {
            if (err) reject(err);
            // res.render('cat', {})
            resolve(result)
        })
    })

    let goods = new Promise((resolve, reject) => {
        con.query('SELECT * FROM goods WHERE category =' + catId, (err, result) => {
            if (err) reject(err)
            resolve(result)
        })
    })

    Promise.all([cat, goods]).then(function (value) {
        res.render('cat', {
            cat: JSON.parse(JSON.stringify(value[0])),
            goods: JSON.parse(JSON.stringify(value[1]))
        })
    })
})

app.get('/goods', (req, res) => {
    let goodsId = req.query.id
    con.query('SELECT * FROM goods WHERE id =' + goodsId, (err, result) => {
        if (err) reject(err);
        res.render('goods', {
            goods: JSON.parse(JSON.stringify(result))
        })
    })
})
app.post('/get-category-list', (req, res) => {
    con.query('SELECT id,category FROM category', (err, result) => {
        if (err) reject(err);
        console.log(result)
        res.json(result)
    })
})
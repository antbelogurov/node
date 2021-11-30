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

app.use(express.json())
app.use(express.static('assets'))
app.set('view engine', 'pug')
app.listen(3000, () => {
    console.log('node work');
})

app.get('/', function (req, res) {
    let cat = new Promise((resolve, reject) => {
        con.query(
            "select id,name, cost, image, category from (select id,name,cost,image,category, if(if(@curr_category != category, @curr_category := category, '') != '', @k := 0, @k := @k + 1) as ind   from goods, ( select @curr_category := '' ) v ) goods where ind < 3",
            function (err, result) {
                if (err) return reject(err);
                resolve(result);
            }
        );
    });
    let description = new Promise((resolve, reject) => {
        con.query(
            "select * from category",
            function (err, result) {
                if (err) return reject(err);
                resolve(result);
            }
        );
    });
    Promise.all([cat, description]).then(val => {
        console.log(val[1])
        res.render('main', {
            goods: val[0],
            cat: val[1]
        })
    })
});

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
app.get('/order', (req, res) => {
    res.render('order')
})
app.post('/get-category-list', (req, res) => {
    con.query('SELECT id,category FROM category', (err, result) => {
        if (err) reject(err);
        res.json(result)
    })
})
app.post('/get-goods-info', (req, res) => {
    console.log(req.body.key);
    if (req.body.key.length != 0) {
        con.query(`SELECT * FROM goods WHERE id in (${req.body.key.join(',')})`, (err, result) => {
            if (err) reject(err);
            let goods = {}
            for (let i = 0; i < result.length; i++) {
                goods[result[i]['id']] = result[i]
            }
            res.json(goods)
        })
    } else {
        res.send('0')
    }
})
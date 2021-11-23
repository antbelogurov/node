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
        console.log(goods);
        res.render('main', {
            goods: JSON.parse(JSON.stringify(goods))
        })
    })
})
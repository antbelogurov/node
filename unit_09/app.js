const mysql = require('mysql');
const http = require('http');
const url = require('url');

// конфигурация

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    pass: '',
    database: 'test',
});

conn.connect(err => {
    if (err) {
        console.log(err);
        return err;
    } else {
        console.log('Database ----- OK');
    }
});

let query = "SELECT * FROM user";
let arr = []

// conn.end( err => {
//     if (err) {
//         console.log(err);
//         return err;
//     }
//     else {
//         console.log('Database ----- Close');
//     }
// });

// task2


http.createServer((req, res) => {
    console.log('server work');
    if (req.method === 'GET') {
        let urlReq = url.parse(req.url, true)
        switch (+urlReq.query.task) {
            case 2:
                conn.query(query, (err, result, field) => {
                    let arr = []
                    for (let i of result) {
                        arr.push(i.firstname);
                    }
                    console.log(JSON.stringify(arr));
                    res.end(JSON.stringify(arr))
                });
                break
            case 3:
                conn.query(query, (err, result, field) => {
                    let arr = []
                    console.log(result);
                    for (let i of result) {
                        arr.push(i.email);
                    }
                    console.log(JSON.stringify(arr));
                    res.end(JSON.stringify(arr))
                });
                break
            case 4:
                let emailGet = urlReq.query.email
                conn.query(query, (err, result, field) => {
                    for (let i of result) {
                        if (i.email === emailGet) {
                            res.end(JSON.stringify(i.id))
                        }
                    }
                    res.end(JSON.stringify('0'))
                });
                break
            case 5:
                let emailGet2 = urlReq.query.email
                console.log(emailGet2);
                let queryEmail = `SELECT id FROM user WHERE email LIKE '%${emailGet2}%'`;
                console.log(queryEmail);
                conn.query(queryEmail, (err, result, field) => {
                    res.end(JSON.stringify(result))
                });
                break
        }
    }
}).listen(3002);
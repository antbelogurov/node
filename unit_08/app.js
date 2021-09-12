//Создаем сервер
const http = require('http');
const url = require('url');

//	Напишите функцию t2 которая принимает внутри сервера два параметра request, response и если запрос GET и параметр p равен 70 возвращает 800
const t2 = (req, res) => {
        if (req.method === 'GET') {
                let urlReq = url.parse(req.url, true)
                console.log(typeof urlReq.query.p);
                if(+urlReq.query.p === 70) {
                 console.log('сработало');
                        res.end('800')
                }
            
        }

}



const t4 = (req, res) => {

}

const t5 = (req, res) => {

}

http.createServer((req, res) => {
        console.log('server work');
        t2(req, res)
        res.end('goo');
}).listen(3002);
const http = require('http');
const url = require('url');


http.createServer(function (req, res) {
    let urlPath = url.parse(req.url)


    if (req.method === 'GET') {
        console.log('get');
        console.log(urlPath.pathname)
        switch (urlPath.pathname) {
            case '/about':
                console.log('это about');
                about(req, res)
                break;
            case '/':
                main(req, res)
                break;
            case '/cat':
                cat(req, res)
                break;

            default:
                page404(req, res)

        }
    }
}).listen(3000)
console.log('server run')

function main(req, res) {
    res.end("main")
}

function about(req, res) {
    res.end("about")
}

function cat(req, res) {
    let urlReq = url.parse(req.url, true)
    res.end(urlReq.query.lang === "ru" ? "ru" : "en")
}

function page404(req, res) {
    res.end("404")
}
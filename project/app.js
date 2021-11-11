// express 
let express = require('express'),
    app = express()

app.use(express.static('assets'))

app.listen(3000, () => {
    console.log('node work');
})

app.get('/', (req, res) => {
    res.render('index.html')
})
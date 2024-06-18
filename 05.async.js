const express = require('express');
const app = express();
const PORT = 7878;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('async', {title: '다시 해보자'})
})

//axios
app.get('/axios', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})


app.listen(PORT, () => {
    console.log(`접속이다 ${[PORT]}`);
})
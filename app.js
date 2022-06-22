const express = require('express');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        nombre: "Loki",
        edad: 1,
        amigos: 2,
        urls: ['https://i.picsum.photos/id/237/200/200.jpg', 'https://i.picsum.photos/id/200/200/200.jpg', 'https://i.picsum.photos/id/1062/200/200.jpg']
    });
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(3001);
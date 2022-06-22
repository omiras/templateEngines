const express = require('express');

const app = express();

app.use(express.static('public'));


app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        nombre: "Loki",
        edad: 1,
        amigos: 2,
        urls: ['https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip', 'https://i.insider.com/61d1c0e2aa741500193b2d18?width=700']
    });
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(3001);
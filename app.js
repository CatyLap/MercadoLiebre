const express = require(`express`);
const path = require(`path`);
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const port=process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});


app.get(`/`, (req, res) => {
    res.sendFile(path.resolve(__dirname, `./views/home.html`));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});
app.post('/register', (req, res) => {
    // Por ahora, solo redirigiremos a la página principal
    console.log(req.body); // Imprimir datos del formulario en la consola para fines didácticos
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});
app.post('/login', (req, res) => {
    // Por ahora, solo redirigiremos a la página principal
    console.log(req.body); // Imprimir datos del formulario en la consola para fines didácticos
    res.redirect('/');
});
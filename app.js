const express = require(`express`);
const path = require(`path`);

const app = express();

app.use(express.static('public'));

const port=process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto 3000`);
});


app.get(`/`, (req, res) => {
    res.sendFile(path.resolve(__dirname, `./views/home.html`));
});
import express from 'express';
import fetch from 'node-fetch';


const Quote = (await import('inspirational-quotes')).default;
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', async(req, res) => {
    res.render("index");
});


app.get('/api', async(req, res) => {
    res.render("api")
});

app.get('/powershell', async(req, res) => {
    res.render("powershell")
});

app.get('/automation', async(req, res) => {
    res.render("automation")
});

app.get('/builtIn', async(req, res) => {
    //hit the limit had to create an app and get the key
    // let apiKey = "kS0Bxix9jy_K4_WSu7fWSSgsMHGwvDv7yAvNMCn8mxM";
    // let url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&featured=true&query=solar-system`;

    // let response = await fetch(url);
    // let data = await response.json();
    // let randomImage = data.urls.full;
    // //could also write the below line as res.render("index",{randomImage})

    let url = `https://dog.ceo/api/breeds/image/random`;
    let response = await fetch(url);
    let data = await response.json();
    let dogImage = data.message;

    let quote = Quote.getQuote();

    res.render("builtIn", {dogImage, quote})

    console.log(Quote);
    console.log(Quote.getQuote);
});

app.listen(3000, () => {
   console.log('server started');
});

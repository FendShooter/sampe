const express = require('express');
const path = require('path');
const hbs = require('hbs');
// public folder

// handbars use
const partialsPath = path.join(__dirname, '../templates/partials');
const viewPath = path.join(__dirname, '../templates/views');
const app = express();

app.set('view engine', 'hbs');
app.set('views', viewPath);
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath))
hbs.registerPartials(partialsPath)
app.get('/', (req, res) => {
  res.send('hello')
})
app.get('/weather', (req, res) => {
  res.render('weather')
})

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log('Sever running');
 })
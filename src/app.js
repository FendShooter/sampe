const express = require('express');
const path = require('path');
const hbs = require('hbs');
// public folder

// handbars use
const partialsPath = path.join(__dirname, '../templates/partials');
const viewPath = path.join(__dirname, '../templates/views');
const app = express();
const pool =require('./dbconnect');
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


app.get("/dvd", (req, res) => {
 
    pool.query("SELECT * FROM film", (error, results) => {
      if (error) {
        throw error;
      }
      // response.status(200).json(results.rows);

      res.json(results.rows)
    });

});
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log('Sever running');
 })
import express from 'express';
import configViewEngine from './config/viewEngine';
require('dotenv').config();

const app = express()
const port = process.env.PORT || 8080;
console.log('>>>check port: ', port)

configViewEngine(app);

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// модуль запуска сервера
const express = require('express');
const path = require('path');

const app = express();

// шаблон pug

app.set('views',path.join(__dirname, "views"));
app.set('view engine','pug');

// при запросе  get / зпускать фаил index.js из папки routes  
const index = require('./routes/index')
app.use('/', index);

// слушать запуск сервера на порту 8080, если ок, то в консоли вывести 'Server ok '
app.listen(8080, ()=>{
    console.log('Server ok ')
});


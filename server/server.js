/* eslint-disable */
import '@babel/polyfill';
import path from 'path';
import express from 'express';
import cors from 'cors';

var r = require('rethinkdbdash')({
  host: 'qxopu2.stackhero-network.com',
  port: 29015,
  user: 'admin',
  password: 'asdf',
  db: 'test',
  ssl: true,
});

const app = express();
const http = require('http').createServer(app);

app.use(cors());
app.use(express.static(path.join(process.env.PWD, 'static')));

app.get('/api/articles', (req, res) => {
  r.table('articles')
    .run()
    .then(function (data) {
      res.json(data);
    })
    .error(function (err) {
      console.log(err);
    })
});

// Fallback route
app.get('/*', (req, res) => {
  res.sendFile(path.resolve('./static/index.html'), (err) => {
    if (err) res.status(500).send(err);
  });
});

const port = process.env.PORT || 4000;
const io = require('socket.io')(http);

r.table('articles')
  .changes()
  .run()
  .then(function (cursor) {
    cursor.each((err, data) => {
      if (err) throw err;
      io.emit('new_article', data);
    });
  })
  .error(function (err) {
    console.log(err);
  });

http.listen(port, () => {
  console.log('Listening');
});

setTimeout(() => {
  r.table('articles')
    .insert({
      title: 'New article',
      date: new Date(),
      topics: [],
      country: 'United States',
    })
    .run()
    .then(function (response) {
      console.log('Success ', response);
    })
    .error(function (err) {
      console.log('error occurred ', err);
    });
}, 2000);
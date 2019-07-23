/* eslint-disabl */
import '@babel/polyfill';
import path from 'path';
import express from 'express';
import cors from 'cors';
import { dbConfig } from './dbConfig';
import dbListenForChanges from './dbListenForChanges';
import dbSimulateArticleStream from './dbSimulateArticleStream';
import setInitialDates from './setInitialDates';

const r = require('rethinkdbdash')(dbConfig);

const app = express();
const http = require('http').createServer(app);

app.use(cors());
app.use(express.static(path.join(process.env.PWD, 'static')));

app.get('/api/articles', (req, res) => {
  r.table('articles')
    .run()
    .then((data) => {
      const dataWithDates = setInitialDates(data);
      res.json(dataWithDates);
    })
    .error((err) => {
      console.log(err);
    });
});

// Fallback route
app.get('/*', (req, res) => {
  res.sendFile(path.resolve('./static/index.html'), (err) => {
    if (err) res.status(500).send(err);
  });
});

const port = process.env.PORT || 4000;
const socket = require('socket.io')(http);

http.listen(port, () => { console.log(`Listening at ${port}`); });

dbListenForChanges(r, socket);
dbSimulateArticleStream(r, socket);

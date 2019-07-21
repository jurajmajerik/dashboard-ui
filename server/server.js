/* eslint-disabl */
import '@babel/polyfill';
import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import socket from 'socket.io';
import r from 'rethinkdb';
import subscribeClient from './subscribeClient';
import resetDB from './resetDB';

r.connect({
  host: 'qxopu2.stackhero-network.com',
  port: 29015,
  user: 'admin',
  password: 'asdf',
  db: 'test',
  ssl: true,
}).then((connection) => {
  const app = express();

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(process.env.PWD, 'static')));

  app.get('/api/articles', (req, res) => {
    r.table('articles')
      .run(connection, (err, cursor) => {
        if (err) throw err;
        cursor.toArray((err, data) => {
          if (err) throw err;
          res.json(data);
        });
      });
  });

  // Fallback route
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve('./static/index.html'), (err) => {
      if (err) res.status(500).send(err);
    });
  });

  const port = process.env.PORT || 4000;
  const io = socket.listen(app.listen(port));
  console.log('App listening on 4000');

  resetDB(r, connection, io);
  subscribeClient(r, connection, io);
});

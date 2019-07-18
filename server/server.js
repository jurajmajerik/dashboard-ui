import '@babel/polyfill';
import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import sockio from 'socket.io';
import r from 'rethinkdb';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(process.env.PWD, 'static')));

// Fallback route
app.get('/*', (req, res) => {
  res.sendFile(path.resolve('./static/index.html'), (err) => {
    if (err) res.status(500).send(err);
  });
});

const port = process.env.PORT || 4000;
// app.listen(port, () => console.log(`Server listening on port ${port}`));

const io = sockio.listen(app.listen(4000));
console.log('App listening on 4000');

io.sockets.on('connection', (socket) => {
  console.log('Connected to socket');
});

r.connect({ db: 'testdb' }).then((conn) => {
  r.table('orders').changes().run(conn, (err, cursor) => {
    cursor.each((err, item) => {
      io.emit('orders_updated', item);
    });
  });
});

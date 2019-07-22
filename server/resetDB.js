import subscribeClient from './subscribeClient';

export default function resetDB(r, connection, io) {
  io.sockets.on('connection', (socket) => {
    r.table('articles_new')

    // 1. Delete existing articles
      .delete()
      .run(connection, (err, result) => {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));

        // 2. Insert new article
        setTimeout(() => {
          r.table('articles_new')
            .insert([
              { title: 'New article 1', topics: [], date: new Date(), country: 'United States' },
            ]).run(connection, (err, result) => {
              if (err) throw err;
              io.emit('new_article', { id: '123hhjs', title: 'New article 1', topics: [], date: new Date(), country: 'United States' });
            });
        }, 1000);
      });
  });
}

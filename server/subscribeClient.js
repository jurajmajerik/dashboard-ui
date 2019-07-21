export default function subscribeClient(r, connection, io) {
  r.table('articles_new').changes({ includeTypes: true }).run(connection, (err, cursor) => {
    if (err) throw err;
    cursor.each((err, item) => {
      if (err) throw err;
      io.emit('new_article', item);
    });
  });
}

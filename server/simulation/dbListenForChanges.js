export default function dbListenForChanges(r, io) {
  r.table('articles_new')
    .changes({ includeTypes: true, squash: true })
    .run()
    .then((cursor) => {
      cursor.each((err, data) => {
        if (err) throw err;
        io.emit('new_article', data);
      });
    })
    .error((err) => {
      console.log(err);
    });
}

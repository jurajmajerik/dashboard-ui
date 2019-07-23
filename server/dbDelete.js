export default function dbDelete(r) {
  r.table('articles_new')
    .delete()
    .run()
    .then((result) => {
      console.log(result);
    })
    .error((err) => {
      console.log(err);
    });
}

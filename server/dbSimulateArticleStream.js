import dbDelete from './dbDelete';
import { articlesToStream } from './articlesToStream';

export default function dbSimulateArticleStream(r, socket) {
  dbDelete(r);
  articleAdder(r, 0, socket);
}

function articleAdder(r, i, socket) {
  let index = i;
  const articleToAdd = articlesToStream[index];
  articleToAdd.date = new Date();
  setTimeout(() => {
    r.table('articles_new')
      .insert(articleToAdd)
      .run()
      .then(() => {})
      .error((err) => {
        console.log('error occurred ', err);
      });

    index += 1;
    if (index < articlesToStream.length) {
      articleAdder(r, index, socket);
    } else {
      dbDelete(r);
      socket.emit('db_reset');
      // articleAdder(r, 0, socket);
    }
  }, 2000);
}

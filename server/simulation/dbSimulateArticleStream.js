import dbDelete from './dbDelete';
import articleAdder from './articleAdder';

export default function dbSimulateArticleStream(r, socket) {
  dbDelete(r);
  articleAdder(r, 0, socket);
}

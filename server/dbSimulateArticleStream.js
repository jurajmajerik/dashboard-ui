import dbDelete from './dbDelete';

const articlesToAdd = [
  { title: "University finance: 'Urgent review required' over bad news", country: "United Kingdom", topics: [1] },
  { title: "North Yorkshire chippy to open restaurant in China", country: "China", topics: [2] },
  { title: "Deadly earthquake hits China's Sichuan province", country: "China", topics: [4] },
  { title: "Nike pulls Betsy Ross flag trainer 'after Kaepernick complaint'", country: "United States", topics: [6] },
  { title: "French storm: Hail batters south-east France", country: "France", topics: [4] },
  { title: "Mangalore: Inquiry ordered after India plane skids off runway", country: "India", topics: [4] },
];

export default function dbSimulateArticleStream(r, socket) {
  dbDelete(r);
  articleAdder(r, 0, socket);
}

function articleAdder(r, i, socket) {
  let index = i;
  const articleToAdd = articlesToAdd[index];
  articleToAdd.date = new Date();
  setTimeout(() => {
    r.table('articles_new')
      .insert(articleToAdd)
      .run()
      .then((response) => {})
      .error((err) => {
        console.log('error occurred ', err);
      });

    index += 1;
    if (index < 5) {
      articleAdder(r, index, socket);
    } else {
      dbDelete(r);
      socket.emit('db_reset');
      // articleAdder(r, 0, socket);
    }
  }, 2000);
}

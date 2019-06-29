export default function getAllArticles(dataset, filter) {
  const countries = Object.keys(dataset);

  if (filter === 'all') {
    return countries.reduce((prevArr, country) => {
      return prevArr.concat(dataset[country]);
    }, []);
  }

  const topic = parseInt(filter);
  const result = [];
  countries.forEach((country) => {
    dataset[country].forEach((article) => {
      if (article.topics.includes(topic)) {
        result.push(article);
      }
    });
  });
  return result;
}

export default function getArticlesForCountry(dataset, country, filter) {
  if (filter === 'all') {
    return dataset[country];
  }

  return dataset[country].filter((article) => {
    const topic = parseInt(filter);
    return article.topics.includes(topic);
  });
}

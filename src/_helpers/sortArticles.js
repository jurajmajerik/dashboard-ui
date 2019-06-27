export default function sortArticles(array) {
  return array.sort((a, b) => b.date - a.date);
}

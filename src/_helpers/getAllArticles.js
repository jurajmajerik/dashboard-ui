export default function getAllArticles(dataset) {
  const countries = Object.keys(dataset);
  return countries.reduce((prevArr, country) => {
    return prevArr.concat(dataset[country]);
  }, []);
}

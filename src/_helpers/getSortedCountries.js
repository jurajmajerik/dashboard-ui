// Sort countries based on article count
export default function getSortedCountries(dataset) {
  const countries = Object.keys(dataset);
  return countries.sort((a, b) => (
    dataset[b].length - dataset[a].length
  ));
}

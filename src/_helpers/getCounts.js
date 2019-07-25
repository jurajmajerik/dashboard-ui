export default function getCounts(dataHistorical) {
  return dataHistorical.reduce((previous, current) => {
    previous.push(current.count);
    return previous;
  }, []);
}

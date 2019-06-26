import { articlesToAdd } from './data/articlesToAdd';

export default function articleAdder(i) {
  const { dataset } = this.state;
  let index = i;
  setTimeout(() => {
    const articleToAdd = articlesToAdd[i];
    const newDataset = dataset;
    newDataset[articleToAdd.country].push(articleToAdd);
    this.setState({ dataset: newDataset });
    index += 1;
    if (i < articlesToAdd.length - 1) {
      articleAdder.call(this, index);
    }
  }, 500);
}

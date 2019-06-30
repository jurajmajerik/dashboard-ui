import moment from 'moment';
import { articlesToAdd } from '../_data/articlesToAdd';

export default function articleAdder(i) {
  const { dataset } = this.state;
  let index = i;
  setTimeout(() => {
    const newDataset = dataset;
    const articleToAdd = articlesToAdd[i];
    const { country } = articleToAdd;

    delete articleToAdd.country;
    articleToAdd.date = moment().add(1 * i, 'minutes');
    newDataset[country].unshift(articleToAdd);

    this.setState({ dataset: newDataset, newArticle: articleToAdd, latestArticleCountry: country });

    index += 1;
    if (i < articlesToAdd.length - 1) {
      articleAdder.call(this, index);
    }
  }, 2000);
}

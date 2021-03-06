import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { topicsConfig } from '../_data/topics';

export default function ArticleRow(props) {
  const { title, date, topics } = props;
  const formattedDate = moment(date).format('DD MMM HH:mm');
  const topicsString = topics.reduce((prevStr, current) => {
    prevStr.push(<div key={current} className="topic-badge">{topicsConfig[current]}</div>);
    return prevStr;
  }, []);

  return (
    <div className="article-row">
      <div className="text-darker first-col-text">{formattedDate}</div>
      <div>{title}</div>
      <div className="topics-wrapper">{topicsString}</div>
      <div>www.bbc.co.uk</div>
    </div>
  );
}

ArticleRow.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  topics: PropTypes.array.isRequired,
};

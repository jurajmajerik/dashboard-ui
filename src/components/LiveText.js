import React from 'react';
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';

export default class LiveText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    this.show();
    setTimeout(() => {
      this.hide();
    }, 1600);
  }

  componentDidUpdate(prevProps) {
    const { article } = this.props;
    if (article.title !== prevProps.article.title) {
      this.show();
      setTimeout(() => {
        this.hide();
      }, 1600);
    }
  }

  show() {
    this.setState({ show: true });
  }

  hide() {
    this.setState({ show: false });
  }

  render() {
    const { show } = this.state;
    const { article } = this.props;
    return (
      <Fade in={show} timeout={100}>
        <div>{article.title}</div>
      </Fade>
    );
  }
}

LiveText.propTypes = {
  article: PropTypes.object.isRequired,
};

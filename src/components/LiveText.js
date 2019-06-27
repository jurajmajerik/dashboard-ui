import React from 'react';
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
    }, 500);
  }

  componentDidUpdate(prevProps) {
    const { article } = this.props;
    if (article !== prevProps.article) {
      this.show();
      setTimeout(() => {
        this.hide();
      }, 500);
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
      <Fade in={show} timeout={200}>
        <div>{article.title}</div>
      </Fade>
    );
  }
}

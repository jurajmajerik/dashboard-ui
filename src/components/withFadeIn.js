import React from 'react';
import Fade from '@material-ui/core/Fade';

export default function withFadeIn(Component) {
  class WithFadeIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = { show: false };
    }

    componentDidMount() {
      this.setState({ show: true });
      setTimeout(() => {
        this.setState({ show: false });
      }, 2000);
    }

    render() {
      const { show } = this.state;
      console.log(show);
      return (
        <Fade in={true} timeout={500}>
          <Component {...this.props} />
        </Fade>
      );
    }
  }
  return WithFadeIn;
}

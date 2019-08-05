import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';

export default class CountryNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trend: 'noChange',
      show: true,
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { rank } = this.props;
    if (rank !== prevProps.rank) {
      const trend = rank < prevProps.rank ? 'increase' : 'decrease';
      this.setTrend(trend);
      setTimeout(() => {
        this.hide();
        setTimeout(() => {
          this.show();
        }, 200);
      }, 0);
    }
  }

  setTrend(trend) {
    this.setState({ trend });
  }

  show() {
    this.setState({ show: true });
  }

  hide() {
    this.setState({ show: false });
  }

  render() {
    const trendIcons = {
      increase: <i className="fas fa-chevron-up" style={{ color: '#58AC5F' }} />,
      decrease: <i className="fas fa-chevron-down" style={{ color: '#AC5858' }} />,
      noChange: <div className="text-darker" style={{ transform: 'translateY(-1px)' }}>—</div>,
    };
    const { country, rank } = this.props;
    const { show, trend } = this.state;
    return (
      <Fade in={show} timeout={500}>
        <NavLink
          className="navlink-wrapper country-nav-item"
          key={country}
          to={`/${country}`}
          activeClassName="sidebar-active"
        >
          <div className="trend-arrow">{trendIcons[trend]}</div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {rank}
            &nbsp;
            {country}
          </div>
        </NavLink>
      </Fade>
    );
  }
}

CountryNavItem.propTypes = {
  country: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};

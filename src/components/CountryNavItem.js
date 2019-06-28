import React from 'react';
import { NavLink } from 'react-router-dom';

export default class CountryNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trend: 'noChange' };
  }

  componentDidUpdate(prevProps) {
    const { rank } = this.props;
    if (rank !== prevProps.rank) {
      const trend = rank < prevProps.rank ? 'increase' : 'decrease';
      this.setTrend(trend);
    }
  }

  setTrend(trend) {
    this.setState({ trend });
  }

  render() {
    const trendIcons = {
      increase: <i className="fas fa-chevron-up" style={{ color: 'green' }} />,
      decrease: <i className="fas fa-chevron-down" style={{ color: 'red' }} />,
      noChange: <div className="text-darker" style={{ transform: 'translateY(-1px)' }}>—</div>,
    };
    // const trendIcons = {
    //   increase: <div className="text-darker" style={{ paddingBottom: '4px' }}>—</div>,
    //   decrease: <div className="text-darker" style={{ paddingBottom: '4px' }}>—</div>,
    //   noChange: <div className="text-darker" style={{ paddingBottom: '4px' }}>—</div>,
    // };
    const { country, rank } = this.props;
    return (
      <NavLink
        className="navlink-wrapper country-nav-item"
        key={country}
        to={`/${country}`}
        activeClassName="sidebar-active"
      >
          <div>{trendIcons[this.state.trend]}</div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {rank}
            &nbsp;
            {country}
          </div>
      </NavLink>
    );
  }
}

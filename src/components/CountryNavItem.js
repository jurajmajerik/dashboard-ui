import React from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

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
      increase: <KeyboardArrowUp style={{ color: 'green' }} />,
      decrease: <KeyboardArrowDown style={{ color: 'red' }} />,
      noChange: '—',
    };
    // const trendIcons = {
    //   increase: '>',
    //   decrease: '<',
    //   noChange: '—',
    // };
    const { country, rank } = this.props;
    return (
      <div className="navlink-wrapper">
        <NavLink key={country} to={`/${country}`} activeClassName="sidebar-active">
          <div className="country-nav-item">
            <div>{trendIcons[this.state.trend]}</div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {rank}
              &nbsp;
              {country}
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}

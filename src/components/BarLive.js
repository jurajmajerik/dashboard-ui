import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

import LiveText from './LiveText';

const AntSwitch = withStyles(theme => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    paddingBottom: 2,
    marginTop: 5,

  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export default function BarLive(props) {
  const { article } = props;
  const styles = {
    root: {
      height: 250,
      width: 100,
    },
  };
  return (
    <div className="bar-live box">
      <div className="live-text">
        <div className="led"><i className="fas fa-circle" /></div>
        <div>LIVE NOW:</div>
        <LiveText article={article} />
      </div>
      <div style={{ textAlign: 'right' }}>
        <AntSwitch
          checked={true}
          onChange={null}
          value="checkedC"
        />
      </div>
    </div>
  );
}

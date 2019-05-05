// @flow

import React from 'react';
import choreography from '../factory/choreography';
import { scale } from '../presets';
import type { TransitionProps } from '../types/index';

type ExpandTransitionProps = TransitionProps & {
  direction: string,
};

const ExpandTopTransition = choreography([scale.vertical], {
  transformOrigin: 'top',
});

const ExpandBottomTransition = choreography([scale.vertical], {
  transformOrigin: 'bottom',
});

const ExpandLeftTransition = choreography([scale.horizontal], {
  transformOrigin: 'left',
});

const ExpandRightTransition = choreography([scale.horizontal], {
  transformOrigin: 'right',
});

class ExpandTransition extends React.Component<ExpandTransitionProps> {
  static defaultProps = {
    direction: 'left',
  };

  render() {
    const { direction, ...rest } = this.props;

    switch (direction) {
      case 'left':
        return <ExpandLeftTransition {...rest} />;
      case 'right':
        return <ExpandRightTransition {...rest} />;
      case 'top':
        return <ExpandTopTransition {...rest} />;
      case 'bottom':
        return <ExpandBottomTransition {...rest} />;
    }
  }
}

export default ExpandTransition;

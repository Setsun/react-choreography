// @flow

import React from 'react';
import choreography from '../factory/choreography';
import { rotate3d } from '../presets';
import type { TransitionProps } from '../types/index';

type FlipTransitionProps = TransitionProps & {
  direction: string,
};

const FlipTopTransition = choreography([rotate3d.top], {
  transformOrigin: 'top',
});

const FlipBottomTransition = choreography([rotate3d.bottom], {
  transformOrigin: 'bottom',
});

const FlipLeftTransition = choreography([rotate3d.left], {
  transformOrigin: 'left',
});

const FlipRightTransition = choreography([rotate3d.right], {
  transformOrigin: 'right',
});

class FlipTransition extends React.Component<FlipTransitionProps> {
  static defaultProps = {
    direction: 'left',
  };

  render() {
    const { direction, ...rest } = this.props;

    switch (direction) {
      case 'left':
        return <FlipLeftTransition {...rest} />;
      case 'right':
        return <FlipRightTransition {...rest} />;
      case 'top':
        return <FlipTopTransition {...rest} />;
      case 'bottom':
        return <FlipBottomTransition {...rest} />;
    }
  }
}

export default FlipTransition;

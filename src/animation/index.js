//dependencies
import React, {PropTypes} from 'react';
import {CSSTransitionGroup} from 'react-transition-group';

const propTypes = {
    //If you want to use a custom css class
    // for each transion step, set this prop to TRUE.
    customClasses: PropTypes.bool,
    // to enable transition
    appear: PropTypes.bool,
    enter: PropTypes.bool,
    leave: PropTypes.bool,

    // Transition duration
    appearTimeout: PropTypes.number,
    enterTimeout: PropTypes.number,
    leaveTimeout: PropTypes.number,

    // Transition css className.
    appearName: PropTypes.string,
    appearActiveName: PropTypes.string,
    enterName: PropTypes.string,
    enterActiveName: PropTypes.string,
    leaveName: PropTypes.string,
    leaveActiveName: PropTypes.string,
    transitionName: PropTypes.string
};

const defaultProps = {
    customClasses: true,

    appear: true,
    enter: true,
    leave: true,

    appearTimeout: 500,
    enterTimeout: 500,
    leaveTimeout: 500,

    appearName: 'bounce',
    appearActiveName: 'bounce',
    enterName: 'bounce',
    enterActiveName: 'bounce',
    leaveName: 'bounceOut',
    leaveActiveName: 'bounceOut'
};


function Animation({customClasses, appear, enter, leave, appearName,
  appearActiveName, enterName, enterActiveName,leaveName, leaveActiveName,
  appearTimeout, enterTimeout, leaveTimeout, transitionName, ...otherProps}) {
    let transitionClassName = transitionName;
    if(true === customClasses) {
        transitionClassName = {
            appear: appearName,
            appearActive: appearActiveName,
            enter: enterName,
            enterActive: enterActiveName,
            leave: leaveName,
            leaveActive: leaveActiveName
        }
    }
    return (
      <CSSTransitionGroup
          transitionAppear={appear}
          transitionAppearTimeout={enter}
          transitionEnter={leave}
          transitionEnterTimeout={appearTimeout}
          transitionLeave={enterTimeout}
          transitionLeaveTimeout={leaveTimeout}
          transitionName={transitionClassName}
      >
          <div className='animated'>
            {otherProps.children}
          </div>
      </CSSTransitionGroup>
    );
}

//Static props.
Animation.displayName = 'animation';
Animation.defaultProps = defaultProps;
Animation.propTypes = propTypes;

export default Animation;

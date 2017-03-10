//dependencies
import React, {PropTypes, PureComponent} from 'react';
import i18next from 'i18next';
import MDBehaviour from '../behaviours/material';

/**
 * Component's props
 */
const propTypes = {
    position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
    isLarge: PropTypes.bool,
    label: PropTypes.string
};

/**
 * Component default Props
 */
const defaultProps = {
    position: 'bottom'
};

/**
* Tooltip Component.
*/
@MDBehaviour('materialTooltip')
class Tooltip extends PureComponent {

    /**
     * Builds the tooltip's className
     * @return {string} The built classname
     */
    buildClassname = () => {
        const {isLarge, position} = this.props;
        let tooltipLarge = isLarge === true ? ' mdl-tooltip--large' : '';
        return `mdl-tooltip mdl-tooltip--${position}${tooltipLarge}`;
    }

    render() {
        const {label, style, htmlFor, className} = this.props;
        const renderedClassName = `${className ? className : ''}${this.buildClassname()}`
        return (
            <div className={renderedClassName} data-focus='tooltip' ref='materialTooltip' style={style} htmlFor={htmlFor}>
            <span className='tooltip-text'>{i18next.t(label)}</span>
            </div>
        );
    }
}

Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;

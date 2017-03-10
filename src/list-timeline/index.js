import React, {PropTypes, PureComponent} from 'react';
import i18n from 'i18next'

import Line from './line'
// var Line = require('./line').mixin;
// var uuid= require('uuid');
//
// var translationMixin = require('../../common/i18n').mixin;
// var infiniteScrollMixin = require('../mixin/infinite-scroll').mixin;
// var referenceMixin = require('../../common/mixin/reference-property');

import Button from '../button';
//Add a ref to the props if the component is not pure add nothing in the other case.
//import {addRefToPropsIfNotPure, LINE} from '../../utils/is-react-class-component';

class Timeline extends PureComponent {
    _renderLines = () => {
        //const {LineComponent = React.createClass(Line), idField, dateField, onLineClick, data, ...otherProps} = this.props;
        // LEGACY CODE
        const customLineComponent = this.props.lineComponent;
        if (customLineComponent) {
            console.warn('%c DEPRECATED : You are using the lineComponent prop in a timeline component, this will be removed in the next release of Focus Components. Please use LineComponent prop instead.', 'color: #FF9C00; font-weight: bold');
        }
        const FinalLineComponent = customLineComponent || Line;
        // END OF LEGACY CODE
        const {data,dateField,idField, ...otherProps} = this.props;
        return data.map((line, idx) => {
            const timelineFinalProps = {
                    ...otherProps,
                    data: line,
                    dateField,
                    key: line[idField]
                };
            return <FinalLineComponent {...timelineFinalProps} />;
        });
    }

    _renderLoading= () =>  {
        if(this.props.isLoading) {
            if(this.props.loader) {
                return this.props.loader();
            }
            return (
                <li className="timeline-loading">{i18n.t('list.loading')} ...</li>
            );
        }
    }

    _renderManualFetch= () => {
        if(this.props.isManualFetch && this.props.hasMoreData) {
            var style = {className: 'primary'};
            return (
                <li className="timeline-button">
                    <Button label="list.button.showMore"
                        type="button"
                        handleOnClick={this.handleShowMore}
                        style={style}/>
                </li>
            );
        }
    }

    render () {
        return (
            <ul className="timeline">
                {this._renderLines()}
                {this._renderLoading()}
                {this._renderManualFetch()}
            </ul>
        );
    }

}

Timeline.displayName = 'Timeline';
Timeline.defaultProps = {
    data: [],
    idField: 'id',
    dateField: 'date',
    isLoading: false
}
Timeline.propTypes = {
    data: PropTypes.array,
    idField: PropTypes.string,
    dateField: PropTypes.string,
    dateComponent: PropTypes.object,
    lineComponent: PropTypes.func,
    isloading: PropTypes.bool,
    loader: PropTypes.func,
    onLineClick: PropTypes.func
}
export default Timeline;

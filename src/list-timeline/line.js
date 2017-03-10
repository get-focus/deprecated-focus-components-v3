/**@jsx*/
import React, {PropTypes, PureComponent} from 'react';

// import builder from 'focus-core/component/builder';
// import type from 'focus-core/component/types';
// var translationMixin = require('../../common/i18n').mixin;
// var referenceMixin = require('../../common/mixin/reference-property');
// var definitionMixin = require('../../common/mixin/definition');
// var builtInComponentsMixin = require('../mixin/built-in-components');


class Line extends PureComponent {

        /**
         * Get the line value.
         * @returns {object} - the data od the line.
         */
        getValue = () =>  {
            return {
                item: this.props.data
            };
        }

        /**
         * Line Click handler.
         * @param {object} event - the event
         */
        _handleLineClick = (event) => {
            if(this.props.onLineClick) {
                this.props.onLineClick(this.props.data);
            }
        }

        /**
         * render content for a line.
         * @returns {XML} the line content
         */
        _renderLineContent = () => {
            if(this.renderLineContent) {
                return this.renderLineContent(this.props.data);
            }else{
                return (
                    <div>
                        <div className="timeline-heading">
                            <h4 className="timeline-title">{this.props.data.title}</h4>
                        </div>
                        <div className="timeline-body">
                            <p>{this.props.data.body}</p>
                        </div>
                    </div>

                );
            }
        }

        /**
         * Render line in list.
         * @returns {XML} - the render of the line
         */
        render() {
            if(this.renderLine) {
                return this.renderLine();
            }else{
                return (
                    <li>
                        <div className="timeline-date">{this.props.data[this.props.dateField]}</div>
                        <div className="timeline-badge"></div>
                        <div className="timeline-panel" onClick={this._handleLineClick}>
                            {this._renderLineContent()}
                        </div>
                    </li>
                );
            }
        }
}

Line.displayName = 'timeline-line'
Line.propTypes = {
    data: PropTypes.object,
    dateField: PropTypes.string,
    dateComponent: PropTypes.object,
    onLineClick: PropTypes.func
}

export default Line;

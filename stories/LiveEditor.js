
import React, {Component, PropTypes} from 'react';
import '../src/style/storybook.scss'
import 'brace';
import 'brace/mode/jsx'
import 'brace/theme/github'

// Components

import CodeEditorComposant from 'react-ace';

import omitBy from 'lodash/omitBy'
//false
class LiveEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditChange: true,
            valueOfEditor: props.valueOfEditor
        };
    };
    componentWillReceiveProps(value) {
      this.setState({valueOfEditor: value.valueOfEditor})
    }
    render() {
        return (
            <div data-focus='live-editor'>
              <CodeEditorComposant mode='jsx' theme='github' editorProps={{$blockScrolling: Infinity}} value={this.state.valueOfEditor} onChange={(value) => this.setState({valueOfEditor: value})} fontSize={11.5} />
              {this.state.isEditChange && <button onClick={()=> this.props.onChange(this.state.valueOfEditor)}> Submit my component</button>}

            </div>
        );
    };
};

LiveEditor.displayName = 'LiveEditor';
export default LiveEditor;

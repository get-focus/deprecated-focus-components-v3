import React, {PropTypes, Component} from 'react';
import ProgressBar from 'focus-components/progress-bar';

class ProgressBarExample extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: 0};
        this.updateLoading = this.updateLoading.bind(this);
    }

    updateLoading() {
        let {loading} = this.state;
        if(loading < 100) {
            this.setState({loading: loading+5});
            setInterval(this.updateLoading, 500);
        }
    }

    componentDidMount() {
        const {loading} = this.state;
        if (loading < 100) {
            this.updateLoading();
        }
    }

    render() {
        const {loading} = this.state;
        return(
            <div>
                <h5>Default progress bar</h5>
                <ProgressBar completed={loading}/>
                <br/>
                <h5>Interterminate progress bar</h5>
                <ProgressBar indeterminated={true}/>
            </div>
        );
    }
}

export default ProgressBarExample;

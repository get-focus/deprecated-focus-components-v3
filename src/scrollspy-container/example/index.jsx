import React, {PropTypes, Component} from 'react';
import ScrollspyContainer from 'focus-components/scrollspy-container';
import Panel from 'focus-components/panel';

class ScrollspyContainerSample extends Component {
    constructor(props) {
        super(props);
        this.state = {isConditionalBlock: false};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isConditionalBlock: true});
        }, 3 * 1000);
    }

    /**
    * Render the component.
    * @return {object} React node
    */
    render() {
        const {isConditionalBlock} = this.state;

        return (
            <div>
                <ScrollspyContainer offset={1000} >
                    <Panel title='Sports'>
                        <img alt='lorempixel' src='http://lorempixel.com/800/600/sports' title='lorempixel' />
                    </Panel>

                    <Panel title='Animals'>
                        <img alt='lorempixel' src='http://lorempixel.com/800/600/animals' title='lorempixel' />
                    </Panel>

                    <Panel title='Business'>
                        <img alt='lorempixel' src='http://lorempixel.com/800/600/business' title='lorempixel' />
                    </Panel>

                    <Panel title='Cats'>
                        <img alt='lorempixel' src='http://lorempixel.com/800/600/cats' title='lorempixel' />
                    </Panel>

                    <Panel title='City'>
                        <img alt='lorempixel' src='http://lorempixel.com/800/600/city' title='lorempixel' />
                    </Panel>

                    <Panel title='Food'>
                        <img alt='lorempixel' src='http://lorempixel.com/800/600/food' title='lorempixel' />
                    </Panel>

                    {isConditionalBlock &&
                        <Panel title='Conditionnal block'>
                            <img alt='lorempixel' src='http://lorempixel.com/800/600/food' title='lorempixel' />
                            <img alt='lorempixel' src='http://lorempixel.com/800/600/business' title='lorempixel' />
                            <img alt='lorempixel' src='http://lorempixel.com/800/600/city' title='lorempixel' />
                            <img alt='lorempixel' src='http://lorempixel.com/800/600/animals' title='lorempixel' />
                            <img alt='lorempixel' src='http://lorempixel.com/800/600/sports' title='lorempixel' />
                        </Panel>
                    }

                    <Panel title='Nightlife'>
                        <img alt='lorempixel' src='http://lorempixel.com/800/600/nightlife' title='lorempixel' />
                    </Panel>

                    <Panel title='Fashion'>
                        <img alt='lorempixel' src='http://lorempixel.com/800/600/fashion' title='lorempixel' />
                    </Panel>

                    <Panel title='People'>
                        <img alt='lorempixel' src='http://lorempixel.com/800/600/people' title='lorempixel' />
                    </Panel>

                    <Panel title='Nature'>
                        <img src='http://lorempixel.com/800/600/nature' title='lorempixel' alt='lorempixel' />
                    </Panel>

                    <Panel title='Technics'>
                        <img src='http://lorempixel.com/800/600/technics' title='lorempixel' alt='lorempixel' />
                    </Panel>

                    <Panel title='Transport'>
                        <img src='http://lorempixel.com/800/600/transport' title='lorempixel' alt='lorempixel' />
                    </Panel>
                </ScrollspyContainer>
            </div>
        );
    }
}

export default ScrollspyContainerSample;

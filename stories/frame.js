import React, { Component } from 'react'
import { findDOMNode, render, unmountComponentAtNode } from 'react-dom';
// from https://developer.zendesk.com/blog/rendering-to-iframes-in-react
// let elementClass = null;
class Frame extends Component {

    componentDidMount() {
        this.renderFrameContents();
    }

    renderFrameContents() {
        const iframe = findDOMNode(this);
        const doc = iframe.contentDocument;
        const { styles, children } = this.props;
        if (doc.readyState === 'complete') {
            // if (!elementClass) {
            //     elementClass = Element;
            // }
            // iframe.contentWindow.Element = elementClass;// FIX ME dirty fix for material design lite 
            doc.head.querySelectorAll('style').forEach(item => item.remove());
            if (doc.body.children.length === 0) {
                let divElt = doc.createElement('div');
                doc.body.appendChild(divElt);
            }
            if (styles) {
                let css = doc.createElement('style');
                css.type = 'text/css';
                css.innerHTML = styles.join('\n\n');
                doc.head.appendChild(css);
            }
            try {
                render(children, doc.body.firstElementChild);
            } catch (ex) {
                console.warn('Error while rendering in iframe' + ex)
            }
        } else {
            setTimeout(this.renderFrameContents, 0);
        }
    }

    componentDidUpdate() {
        this.renderFrameContents();
    }

    componentWillUnmount() {
        unmountComponentAtNode(findDOMNode(this).contentDocument.body.firstElementChild);
    }

    render() {
        return <iframe width={this.props.width} height={this.props.height} />;
    }

}
Frame.defaultProps = {
    width: 300,
    height: 300
};

export default Frame;
// Dependencies
import React, {PropTypes, PureComponent} from 'react';

class Thumbnail extends PureComponent {
    constructor(props) {
        super(props);
    };
    render() {
        const {title, src} = this.props;
        return(
            <div data-focus='Thumbnail'><div><img src={src} alt={title} style={{width:width+"px",height:height+"px"}}/><div>{title}</div></div></div>
        );
    }
}
Thumbnail.displayName = 'Title';
Thumbnail.propType = {
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number, 
    title: PropTypes.string,
    actions: PropTypes.array
};
export default Thumbnail;

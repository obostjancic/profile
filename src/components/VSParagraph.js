import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

export default class VSParagraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = { active: false }
    }

    render() {
        return(
            <VisibilitySensor partialVisibility={true} onChange={(isVisible) => {this.setState({active: isVisible === true ? true : this.state.active})}}>
            <p style={{visibility: this.state.active ? 'visible' : 'hidden'}} className={this.state.active ? `from-${this.props.direction}` : ''}>{this.props.children}</p>
            </VisibilitySensor>
        );
    }
}
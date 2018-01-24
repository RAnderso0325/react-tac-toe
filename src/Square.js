import React, { Component } from 'react';

class Square extends Component {
    render(){
        return(
            <input type="button" className="box" value={this.props.box} name={this.props.name} onClick={this.props.playBox} />
        );
    }
}

export default Square;
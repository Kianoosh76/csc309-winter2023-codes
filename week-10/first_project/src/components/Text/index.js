import React from 'react';

class Text extends React.Component {
    render(){
        return <span style={{color: 'red', 'fontFamily': 'Arial', fontSize: 20}}>{ this.props.title }</span>
    }
}

export default Text;

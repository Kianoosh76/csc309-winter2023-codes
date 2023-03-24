import React from 'react';
import Text from '../Text';

class Input extends React.Component {
    render(){
        const { title, value, update } = this.props
        return (
            <>
                <input type="text" 
                       value={value} 
                       onChange={event => update(event.target.value)}
                />
                <Text title={title} />
            </>
        )
    }
}

export default Input;
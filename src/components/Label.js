import React from 'react';

class Label extends React.Component{
    
    render(){
        return(
        <h1 className="label">{this.props.value}</h1>
        );
    }
}
export default Label;
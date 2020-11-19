import React from 'react';
import ButtonRow from './ButtonsRow';

class ButtonWrapper extends React.Component{
    
    render(){
        return(
            <div className="button-wrapper">
                <ButtonRow rowNum={0} onClick={(value)=> this.props.onClick(value)}/>
                <ButtonRow rowNum={1} onClick={(value)=> this.props.onClick(value)}/>
                <ButtonRow rowNum={2} onClick={(value)=> this.props.onClick(value)}/>
                <ButtonRow rowNum={3} onClick={(value)=> this.props.onClick(value)}/>
            </div>
        );
    }
}

export default ButtonWrapper;
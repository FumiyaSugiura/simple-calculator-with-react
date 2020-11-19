import React from 'react';
import ButtonWrapper from './ButtonsWrapper';
import Label from './Label';

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state={
            label: 0,
            operator: null,
            number1: 0,
            number2: 0,
            isEqual: false,
        }
    }

    handleClick(value){

        console.log(value);

        switch (value){
            case "+": 
                this.selectCalculatingButton("plus");
                break;
            case "-": 
                this.selectCalculatingButton("minus");
                break;
            case "×": 
                this.selectCalculatingButton("multiply");
                break;
            case "÷": 
                this.selectCalculatingButton("divide");
                break;
            case "=": 
                this.selectEqual();
                break;
            default : 
                if(this.state.isEqual){
                    this.setState({label: 0})
                }
                setTimeout(()=>{this.selectNumber(value)},1);
                
        }

        if(this.state.isEqual){
            this.setState({isEqual:false})
        }

    }

    selectCalculatingButton(type){
        if (this.state.operator){
            this.equal(type);
            this.setState({label:0, operator:type});
        }else{
            const number = this.state.label;
            this.setState({label:0, operator:type, number1:number});
        }
    }

    selectEqual(){
        this.equal(this.state.operator);
        this.setState({operator:null, number1:0, number2:0, isEqual:true});
        setTimeout(()=>{console.log(this.state.label)},1);
    }

    selectNumber(n){
        const resultNum = this.state.label*10 + n;
  
        if(this.state.operator){
            this.setState({label: resultNum, number2: resultNum});
        }else{
            this.setState({label: resultNum, number1: resultNum});
        }
    }

    equal(i){
        let number;
        const number1 = this.state.number1
        const number2 = this.state.number2
        switch(i){
            case "plus":
                number = number1 + number2;
                this.setState({label: number, number1: number, number2: 0});
                break;
            case "minus":
                number = number1 - number2;
                this.setState({label: number, number1: number, number2: 0});
                break;
            case "multiply":
                number = number1 * number2;
                this.setState({label: number, number1: number, number2: 0});
                break;
            case "divide":
                number = number1/number2;
                this.setState({label: number, number1: number, number2: 0});
                break;
            default: 
                return;
        }
    }

    render(){
        return(
            <div className="calculator">
                <Label value={this.state.label}/>
                <ButtonWrapper onClick={(value)=>this.handleClick(value)}/>
                <p>Reload this page to clear the result.</p>
            </div>
        );
    }
}

export default Calculator;
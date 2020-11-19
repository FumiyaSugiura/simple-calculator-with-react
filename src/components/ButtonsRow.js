import React from 'react';
import Button from './Button';

class ButtonRow extends React.Component{
    

    // Buttonコンポーネントを描画する処理をまとめた関数
    renderButton(columnNum){
        const rowContents = [
            [7,8,9,"÷"],
            [4,5,6,"×"],
            [1,2,3,"-"],
            [0,"=","+"]
        ];
        const row = rowContents[this.props.rowNum];

        return <Button value={row[columnNum]} onClick={()=> this.props.onClick(row[columnNum])}/>;
    }

    render(){
     
        if (this.props.rowNum!==3){
        return(
            <div className="button-row">
                {this.renderButton(0)}
                {this.renderButton(1)}
                {this.renderButton(2)}
                {this.renderButton(3)}
            </div>
        );
        }
        if (this.props.rowNum===3){
            return(
                <div className="button-row">
                    {this.renderButton(0)}
                    <div className="equal-button">
                        {this.renderButton(1)}
                    </div>
                    {this.renderButton(2)}
                </div>
            );
        }
    }
}

export default ButtonRow;
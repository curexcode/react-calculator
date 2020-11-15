import React, {Component} from 'react';
import classes from './CalcBody.module.css';
import Display from '../Display/Display';
import Button from '../../components/Button/Button';

class CalcBody extends Component{

        state = {
            displayValue:'' 
        }

        clickEventHandler = (event) => {
            let value = this.state.displayValue;
            let operation = event.target.innerText;

            value = this.calcEngine(value, operation);

            console.log("Value = ", value);
            console.log("Operation = ", operation);

            this.setState({displayValue : value})
        }

        calcEngine = (value, operation) => {
            if(value === 'Error')
                value = '';
            try{
                switch (operation){
                    case 'CE':
                        return '';
                    case 'C':
                        return '';
                    case 'x':
                        value += '*';
                        return value;
                    case '=':
                        return eval(value);
                    case '⇦':
                        return value.slice(0, -1);
                    case '÷':
                        value += '/';
                        return value;
                    default:
                        return value +  operation;
                }
            }catch(err){
                console.log("Error ");
                console.log(err);
                return 'Error';
            }
        }

        render(){
            let buttons = [];
            const buttonText = ['CE', 'C', '⇦', '÷', 7,8,9,'x', 4,5,6, '-', 1,2,3,'+', '±', 0, '.', '='];

            buttons.push(buttonText.map( ch => {
                return <Button text={ch} clicked={this.clickEventHandler}/>
            }));
            return (
                <div  className={classes.CalcBody}>
                    <Display value={this.state.displayValue}/>
                    {buttons}
                </div>
            )
        }
    }


export default CalcBody;
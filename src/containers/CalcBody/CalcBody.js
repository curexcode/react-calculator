import React, {Component} from 'react';
import classes from './CalcBody.module.css';
import Display from '../Display/Display';
import Button from '../../components/Button/Button';

class CalcBody extends Component{

        constructor(props){
            super(props);
            this.state = {
                displayValue:'',
                answered: false,
            }
            document.addEventListener('keydown', this.onKeyPressed);
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
            if(this.state.answered){
                    this.setState({answered: false});
                    if( parseInt(operation))
                        return operation;
                    else 
                        return '';
            }

            console.log('answered = ', this.state.answered);
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
                        this.setState({ answered: true});
                        return eval(value);
                    case '⇦':
                        return value.slice(0, -1);
                    case '÷':
                        value += '/';
                        return value;
                    case '±':
                        value += '-';
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

        onKeyPressed = (e) => {
                e.preventDefault();
                if(this.state.answered)
                    this.setState({displayValue: '' ,answered: false});
                let keyCode = e.keyCode;
                let key = e.key;
                console.log('key code :' + keyCode + ' Key: ' + key);
                let value = this.state.displayValue;
                
                switch(e.key){
                    case 'Escape':
                        this.setState({displayValue: ''})
                        break;
                    case '+':
                        value = this.calcEngine(value, '+');
                        this.setState({displayValue: value});
                        break;
                    case '-':
                        value = this.calcEngine(value, '-');
                        this.setState({displayValue: value});
                        break;
                    case '*':
                        value = this.calcEngine(value, 'x');
                        this.setState({displayValue: value});
                        break;
                    case '/':
                        value = this.calcEngine(value, '÷');
                        this.setState({displayValue: value});
                        break;
                    case '=':
                    case 'Enter':
                        value = this.calcEngine(value, '=');
                        this.setState({displayValue: value, answered: true});
                        break;
                    case 'Backspace':
                        value = this.calcEngine(value, '⇦');
                        this.setState({displayValue: value});
                        break;
                    case '.':
                        value = this.calcEngine(value, '.');
                        this.setState({displayValue: value});
                        break;
                    default:
                        void(0);
                }
                
                let num = parseInt(e.key, 10);
                if(!isNaN(num)){
                    value += num;
                    this.setState({displayValue: value});
                }

                // if(e.key === 'Escape'){
                // }

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
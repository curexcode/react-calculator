import React, { Component } from 'react';
import classes from './Button.module.css';

export default class Button extends Component {
    render() {
        return (
               <button className={classes.Button} onClick={this.props.clicked}>{this.props.text}</button> 
        );
    }
}

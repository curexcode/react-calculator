import React, { Component } from 'react';
import classes from './Display.module.css';

export default class Display extends Component {

    render() {
        return (
            <div class={classes.Display}>
                {this.props.value}
            </div>
        )
    }
}

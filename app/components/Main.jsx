import React from 'react';
import Navbar from 'Navbar';

export default class Main extends React.Component{
    render(){
        return (
            <div>
                <Navbar/>
                Main
                {this.props.children}
            </div>
        );
    }
};
import React from 'react';
import {Link} from 'react-router';

export default class Layout extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <Link to="/">
                        <img className="logo" src="/img/logo-band.png"/>
                    </Link>       
                </header>
                <div className="title">
                    My Band Showcase
                </div>
                <div className="app-content" >{this.props.children}</div>
                <footer>
                    <p>
                        This demo app showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.                    
                    </p>
                </footer>
            </div>
        );
    }
}
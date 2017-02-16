import React from 'react';

const data = {
    'uk':{
        'name': 'United Kingdom',
        'icon': 'flag-uk.png'
    },
    'us':{
        'name': 'United States of America',
        'icon': 'flag-us.png'
    },
    'ina':{
        'name': 'Indonesia',
        'icon': 'flag-ina.png'
    }
};

export default class Flag extends React.Component{
    
    render(){
        const name = data[this.props.code].name;
        const icon = data[this.props.code].icon;
        const imgStyle = {
            width: 16
        };
        return(
            <span className="flag">
                <img className="icon" style={imgStyle} title={name} src={`/img/${icon}`}/> 
                 {this.props.showName && <span className="name">{name}</span>}
            </span>
        );
    }
}

import React from 'react';
import {Link} from 'react-router';

export default class BandPreview extends React.Component{
    render(){
        return(
            <Link to={`/band/${this.props.id}`}>
                <div className="band-preview">
                    <img src={`img/${this.props.image}`} />
                    <h2 className="name" >{this.props.name}</h2>
                    <span className="medals-count" ><img src="/img/medal.png" />{this.props.medals.length}</span>
                </div>
            </Link>
        );
    }
}
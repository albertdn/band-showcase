import React from 'react';
import {Link} from 'react-router';

export default class BandsMenu extends React.Component {
    render(){
        console.log('bandmenu', this.props.bands);
        return(
            <nav className="bands-menu">
                {this.props.bands.map(menuBand =>{
                    return <Link key={menuBand.id} to={`/band/${menuBand.id}`} activeClassName="active" >
                        {menuBand.name}
                    </Link>;
                })}
            </nav>
        );
    }
}


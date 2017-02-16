import React from 'react';
import { Link} from 'react-router';
import NotFoundPage from './NotFoundPage';
import BandsMenu from './BandsMenu';
import Medal from './Medal';
import Flag from './Flag';
import bands from '../data/bands';

export default class BandPage extends React.Component {
    render(){
        const id = this.props.params.id;
        const band = bands.filter((band) => band.id ===id)[0];
        console.log("bands",bands);
        if(!band){
            return <NotFoundPage/>;            
        }
        const headerStyle = { backgroundImage: `url(/img/${band.cover})` };
        
        return(
            <div className="band-full" >
                <BandsMenu bands={bands}/>
                <div className="band">
                    <header style={headerStyle}/>
                    <div className="picture-container">
                        <img src={`/img/${band.image}`}/>
                        <h2 className="name">{band.name}</h2>
                    </div>
                    <section className="description">
                        Band from <strong><Flag code={band.country} showName="true"/></strong>,
                        formed in {band.birth} (Find out more on <a href={band.link} target="_blank">Wikipedia</a>).
                    </section>
                    <section className="medals" >
                        <p> Winner of <strong>{band.medals.length}</strong> medals:</p>
                        <ul>{
                            band.medals.map((medal,i) =><Medal key={i} {...medal}/>)
                        }</ul>
                    </section>
                </div>
                <div className="navigateBack" >
                    <Link to="/">«  Back to the index </Link>
                </div>
            </div>                
        );
    }
}
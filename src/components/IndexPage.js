import React from 'react';
import BandPreview from './BandPreview';
import bands from '../data/bands';

export default class IndexPage extends React.Component{
    render(){
        return(
            <div className="home">
                <div className="bands-selector">
                    {bands.map(bandData=> <BandPreview key={bandData.id} {...bandData}/>)}
                </div>
            </div>
        );
    }
}
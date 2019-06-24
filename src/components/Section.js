import React from 'react';
import InfoBox from './InfoBox';

import '../index.css';

class Section extends React.Component {

    render() {
        return ( 
            <section className="">
                <h2>Sekcja </h2>
                <div className="row">
                    <InfoBox title="Tytuł" content="opis" />
                    <InfoBox title="Tytuł2" content="opis2" />
                    <InfoBox title="Tytuł3" content="opis3" />
                </div>
            </section>
        )
    }
}

export default Section;
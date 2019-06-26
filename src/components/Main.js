import React from 'react';
import Section from './Section';
import SectionH2 from './SectionH2';

import '../index.css';

import logo from '../img/img-test.png';

class Main extends React.Component {

    render() {
        return ( 
            <main className="container-fluid main-bg">
                <h2>Main</h2>
                <Section/>
                <SectionH2 title="Indywidualne podejście do klienta" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, maiores. Quibusdam amet mollitia reiciendis ullam vero sapiente enim ratione iusto sed atque quae commodi necessitatibus fugit nemo, aut quaerat esse." image={logo} name="Indywidualne podejście" />
                <SectionH2 title="Strony i sklepy internetowe" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, maiores. Quibusdam amet mollitia reiciendis ullam vero sapiente enim ratione iusto sed atque quae commodi necessitatibus fugit nemo, aut quaerat esse." image={logo} name="Indywidualne podejście" />
                <SectionH2 title="Aplikacje oraz skrypty" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, maiores. Quibusdam amet mollitia reiciendis ullam vero sapiente enim ratione iusto sed atque quae commodi necessitatibus fugit nemo, aut quaerat esse." image={logo} name="Indywidualne podejście" />
            </main>
        )
    }
}

export default Main;
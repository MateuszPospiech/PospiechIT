import React from 'react';
import Section from './Section';

import '../index.css';

class Main extends React.Component {

    render() {
        return ( 
            <main className="container">
                <h2>Main</h2>
                <Section/>
            </main>
        )
    }
}

export default Main;
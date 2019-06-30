import React from 'react';

import '../index.css';

class Footer extends React.Component {

    render() {
        return ( 
            <footer className="container-fluid text-center p-3 bt-1">
                <a href="http://mateuszpospiech.pl" className="text-center" rel="noopener noreferrer" target="_blank">© 2019 Mateusz Pośpiech</a>
            </footer>
        )
    }
}

export default Footer;
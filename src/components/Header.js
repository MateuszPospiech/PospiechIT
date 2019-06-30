import React from 'react';

import '../index.css';

class Header extends React.Component {
    render() {
        return ( 
            <header className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <h1>Pośpiech.IT</h1>
                        </div>
                        <div>Menu</div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
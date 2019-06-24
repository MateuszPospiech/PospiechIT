import React from 'react';

import '../index.css';

class InfoBox extends React.Component {

    render() {
        return ( 
            <div className="col-xs-12 col-sm-4">
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default InfoBox;
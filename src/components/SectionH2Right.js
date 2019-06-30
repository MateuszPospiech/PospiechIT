import React from 'react';

import '../index.css';

class SectionH2Right extends React.Component {

    render() {
        return ( 
            <section className="container pb-5">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-7">
                        <img src={this.props.image} width="100%" alt={this.props.name}/><br/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-sm-push-6 col-md-5 col-md-push-7 xs-text-center">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.content}</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionH2Right;
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Service } from './'

class Services extends Component {
    render() {
        const listStyle = {
            columns: 2
        };

        return (
            <div>
                <h2>Services</h2>
                <p>
                    I'd like to help move your business goals from idea to reality. I will be
                    honest and upfront and committed to finding solutions to your business needs.
                </p>
                <ul style={listStyle}>
                    {this.props.services.map((svc, idx) => <Service key={idx} service={svc}></Service>)}
                </ul>
            </div>
        )
    }
}

Services.propTypes = {
    services: PropTypes.array
};

export default Services

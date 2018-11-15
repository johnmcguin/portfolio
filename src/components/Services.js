import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Service } from './'

class Services extends Component {
    render() {
        return (
            <div>
                <h2>Services</h2>
                <ul>
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

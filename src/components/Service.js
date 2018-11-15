import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Service extends Component {
    render() {
        return (
            <li>{this.props.service.name}</li>
        )
    }
}

Service.propTypes = {
    service: PropTypes.object
};

export default Service

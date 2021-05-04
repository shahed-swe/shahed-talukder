import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleService = ({ service }) => {
    const { icon, name, details } = service;
    return (
        <div
            className='col-md-4 singleService'
        >
        <FontAwesomeIcon icon={icon} />
        <h4>{name} </h4>
        <p>{details} </p>
        </div>
    );
};

export default SingleService;
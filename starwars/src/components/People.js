import React from 'react';
import axios from 'axios';

const People = () => {
    axios.get('https://swapi.co/api/people/')
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log('There is an error', error)
    })
}

export default People;
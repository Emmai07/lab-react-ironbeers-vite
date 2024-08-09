import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllBeersPage = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        console.log(response.data); // Log the data to understand its structure
        setBeers(response.data);
      })
      .catch(error => console.error('Error fetching beers:', error));
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      {beers.map(beer => (
        <div key={beer._id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
          <img src={beer.image_url} alt={beer.name} style={{ height: '100px' }} />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <small><strong>Contributed by:</strong> {beer.contributed_by}</small>
          <br />
          <Link to={`/beers/${beer._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default AllBeersPage;

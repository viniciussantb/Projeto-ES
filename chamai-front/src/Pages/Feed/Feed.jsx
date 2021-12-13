import React, { useContext, useEffect, useState } from 'react';
import EmailContext from '../../context/EmailContext';
import { FeedService } from '../../services/FeedService';

const Feed = () => {
  const [ rides, setRides ] = useState([]);

  useEffect(() => {
    async function getRides() {
      const response = await FeedService.rides();
      return response;
    }
    const response = getRides();
    if (response.status === 200) {
      setRides(response.status);
    }
    console.log(response);
  }, []);

  async function getRides() {
    const response = await FeedService.rides();
    return response;
  }

  return(
    <div>
      HOLA FEED
    </div>
  );
}

export default Feed;
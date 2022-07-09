import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading';
import Carousel from '../../components/Carousel';
import Cards from '../../components/Cards';

import { RickAndMortyApiService } from '../../services/RickAndMortyApiService';

const HomePageTemplate = () => {
  const [result, setResult] = useState();
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      const data = await RickAndMortyApiService();
      if (data) {
        setResult(data);
        setLoading(false);
      }
    })();
  }, []);
  
  return (
    <>
      <Carousel />
      { isLoading ? <ReactLoading type='spinningBubbles' color='blue' className='mx-auto' /> : <Cards data={result} /> }
    </>
 )
}
export default HomePageTemplate;

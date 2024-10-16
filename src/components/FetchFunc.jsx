import React from 'react';
import axios from 'axios';

const FetchFunc = () => {
  axios.get('https://catfact.ninja/fact').then((resp) => {
    console.log('pakoo', resp.data);
  });

  return (
    <>
      <h1>HEllo lasith</h1>
    </>
  );
};

export default FetchFunc;

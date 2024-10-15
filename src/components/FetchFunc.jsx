import React from 'react';
import axios from 'axios';

const FetchFunc = () => {
  const handelFetchData = () => {
    fetch('https://catfact.ninja/fact').then((resp) =>
      resp.json().then((data) => {
        console.log('data', data);
      }),
    );
  };

  axios.get('https://catfact.ninja/fact').then((resp) => {
    console.log('pakoo', resp.data);
  });

  return (
    <>
      <h1>HEllo lasith</h1>
      <button onClick={handelFetchData}>click...</button>
    </>
  );
};

export default FetchFunc;

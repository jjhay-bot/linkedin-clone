import React from 'react'
import Navbar from './navbar/index';
import Body from './body/index';

const Home = () => {
  return (
    <div style={{maxWidth: '1125px', margin: 'auto'}}>
      <Navbar />
      <Body />
    </div>
  )
}

export default Home

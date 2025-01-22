import React from 'react'
import Banner from '../components/Banner'
import './Home.css'
import TopSeller from '../components/TopSeller'
import Recommened from '../components/Recommended'
import News from '../components/News'

const Home = () => {
  return (
    <div className='home-container' >
        <Banner/>
        <TopSeller/>
        <Recommened/>
        <News/>
    </div>
  )
}

export default Home
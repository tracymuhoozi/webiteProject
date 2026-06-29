import React from 'react'
import Aboutus from './Aboutus'
import Carousel from './Carousel';
import Services from './Services';
import Login from './Login';
import Signup from './Signup'; 


function Home() {

    return (
    <div>
    <Carousel/>
    <Aboutus/>
    <Services/>
    <Login/>
    <Signup/>
    </div>
    )
}

export default Home
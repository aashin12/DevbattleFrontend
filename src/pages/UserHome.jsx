import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import HomeHero from "../components/HomeHero";
import Homecardcarousel from '../components/Homecardcarousal';
import Footer from '../components/Footer';

function UserHome() {
  return (
   <>
   <main className='overflow-x-hidden bg-black'>
     <HomeNavbar/>
     <HomeHero/>
     <section id="section">
      <Homecardcarousel />
      </section>
     <Footer/>
   </main>
   </>
  )
}

export default UserHome
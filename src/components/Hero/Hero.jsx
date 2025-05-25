import React from 'react'
import rocket from '../../assets/rocket.png'
import cloud1 from '../../assets/cloud1.png'
import cloud2 from '../../assets/cloud2.png'
import robot from '../../assets/robot.png'
import { Link } from 'react-router-dom'





const Hero = () => {
    return (
        <>
        <style>
        {`
    @keyframes rocket {
      0%, 100% {
        transform: rotate(-2deg) translate(0px, 0px);
      }
      50% {
        transform: rotate(2deg) translate(50px, 50px);
      }
    }

    .animate-rocket {
      animation: rocket 3s linear infinite;
    }
  `}
        </style>
            <div
                className='h-[170vh] md:h-[80vh] relative text-white  justify-center items-center overflow-hidden' style={{ backgroundColor: "var(--primary-color)" }}>
                {/* main area */}
                <div className='relative z-10 container mx-auto grid md:grid-cols-2 place-items-center'>
                    {/* text info section */}
                    <div className=' text-center md:text-left space-y-6 py-10 md:py-0 mt-0 md:-mt-28 z-300' >
                        <p className='text-xl'>The Arena for Developers</p>
                        <h1 className='text-4xl md:text-6xl font-bold'>Where Coders <br /> Compete and Skills Rise💎</h1>
                        <p className='font-bold'>A platform to solve coding challenges, test your logic, and prepare <br />for real-world developer interviews</p>
                        <div>
                            <Link to={'/register'}>
                              <button  className='border-2 border-white bg-gray-600  px-6 py-2 rounded-full hover-bg-secondary
                          ' style={{height:"3rem",width:"10rem"}}>Get Started</button>
                            </Link>
                        </div>
                    </div>
                    {/* Animated rocket section */}
                    <div >
                        {/* rocket image */}
                        <div>
                            <img src={rocket} alt="Rocket" className='z-10 animate-rocket' style={{width:"35rem",height:"30rem",}} />
                        </div>
                        {/* planet image */}
                        <img src={robot} alt="" style={{width:"25rem",height:"20rem",marginTop:"-300px",marginLeft:"-250px",zindex:"100"}}/>
                    </div>
                </div>

             {/* Cloud images */}
        {/* cloud1 - full width at bottom */}
           <img src={cloud2} style={{width:"100rem",height:"60rem",marginTop:"-650px"}} alt="" />
           <img src={cloud1}   style={{width:"190rem",height:"60rem",marginTop:"-950px",}} alt="" />
      </div>
        
            

           

        </>
    )
}

export default Hero
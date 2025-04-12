import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import {heroVideo , smallHeroVideo} from '../utils'
const Hero = () => {

  const [videotype , setvideotype] = useState(window.innerWidth<760 ? smallHeroVideo : heroVideo) 

  const handleVideoSrcSet = ()=>{
    if(window.innerWidth < 760 )setvideotype(smallHeroVideo) ;
    else setvideotype(heroVideo)
  }

  useEffect(()=>{
window.addEventListener('resize' , handleVideoSrcSet) ; 
return()=>{
  //  to clear the events 
  window.removeEventListener('resize' , handleVideoSrcSet) 
}
  },[])
  useGSAP(()=>{
    gsap.to('#hero' , {opacity:1 , delay:1.5})
    gsap.to('#cta' ,{opacity:1 , y:-50 , delay:2 })
  } , [])
  return ( 
   <section className='w-full nav-height bg-black relative '>

    <div className='h-5/6 w-full flex-center  flex-col'>
    <p  id = 'hero' className='hero-title'>iPhone15 pro </p>
    <div className='md:w-10/12 w-9/12'>
    <video  className='pointer-events-none'autoPlay muted playsInline={true}  key={videotype} >
      <source src={videotype} type='video/mp4' />
    </video>
    </div>
    </div>

{/*  cta means call to action  */}
    <div id='cta' className='flex flex-col  items-center opacity-0 translate-y-20'>

    <a href="#hilights" className='btn'> buy</a>
    <p className='font-normal text-xl'>From $199/month or $999</p>

    </div>
   </section>
  )
}

export default Hero

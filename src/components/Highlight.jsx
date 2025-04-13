import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoAni from "./VideoAni"; 

const Highlight = () => {
useGSAP(()=>{
  gsap.to('#title' , {opacity:1  , y: 0, delay:1.5})
  gsap.to('.link' , {opacity : 1 ,y : 0 , duration:1 , stagger: 0.25 })
},[])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
    <h1 id='title' className='section-heading'> Get the highlights</h1>
    <div className='flex flex-wrap items-end gap-5'>

    <p className='link'> Watch the film
      <img src={watchImg} alt="play" />
       </p>

        <p className='link'> 
        Watch the event
      <img src={rightImg} alt="play" />
        </p>
    </div>
        </div>


        {/*  vicde coursol */}
        <VideoAni/>
      </div>

    </section>
  )
}

export default Highlight

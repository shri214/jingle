import React from 'react'
import './style.css'
import {motion} from 'framer-motion'
import {useInView} from "react-intersection-observer"

export const Tourist=({places})=> {
    const [ref, inView]=useInView({
        triggerOnce:false,
        threshold:0.5,
      })
    const [refs, inViews]=useInView({
        triggerOnce:false,
        threshold:0.5,
      })
  return (
    <div className='container'>
        <div className='first-container'>
            <motion.img src={places[0]["img"]
        } alt="image1" 
        ref={ref}
        initial={{opacity:0, scale:0}}
        animate={{opacity:inView?1:0, scale:inView?1:0}}
        transition={{ duration: 0.5 }}
        />
            <div>
                <a href="#">{places[0]['h']}</a>
                <p>{places[0]['p']}</p>
                <a href="#">{places[0]['l']}</a>
            </div>
        </div>
        <div className='second-container'>
            <div className='second-first'>
            <motion.img src={places[1]["img"]} alt="image1"
            ref={ref}
            initial={{opacity:0, scale:0}}
            animate={{opacity:inView?1:0, scale:inView?1:0}}
            transition={{ duration: 0.5 }}
            />
             <div>
                <a href="#">{places[1]['h']}</a>
                <p>{places[1]['p']}</p>
                <a href="#">{places[1]['l']}</a>
            </div>
            </div>
            <div className='second-last'>
            <motion.img src={places[2]["img"]} alt="image1"
            ref={refs}
            initial={{opacity:0, scale:0}}
            animate={{opacity:inViews?1:0, scale:inViews?1:0}}
            transition={{ duration: 0.5 }}
            />
             <div>
                <a href="#">{places[2]['h']}</a>
                <p>{places[2]['p']}</p>
                <a href="#">{places[2]['l']}</a>
            </div>
            </div>
        </div>
    </div>
  )
}


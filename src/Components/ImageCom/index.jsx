import React from 'react'
import './style.css';

export const ImageComp=({obj})=> {
  return (
    <div className='image-box'>
      <div className='bigger'>
        <img src={obj[0]} alt='image1'/>
        <p>{obj[3][0]}</p>
      </div>
      <div className='smaller'>
        <div className='s1'>
          <img src={obj[1]} alt="image2" />
          <p>{obj[3][1]}</p>
        </div>
        <div className='s1'>
          <img src={obj[2]} alt="image3" />
          <p>{obj[3][2]}</p>
        </div>
      </div>
    </div>
  )
}

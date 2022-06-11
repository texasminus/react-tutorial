import React from 'react'

export default function Info(){
  return (
    <div className='info'>
      <div className='info--content'>
        <h2 className='name'>Midoriya</h2>
        <h4 className='occupation'>Hero</h4>
        <div className='website'>midoriya.com</div>
      </div>
      <div className='buttons'>
        <img className='email' src='img/email.png' />
        <img className='linkedin' src='img/linkedin.png' />
      </div>
    </div>
  )
};
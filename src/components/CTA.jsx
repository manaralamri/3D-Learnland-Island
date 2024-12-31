import React from 'react'
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
      Connect with our island 
        <br className='sm:block hidden'/>
        if you're looking for adventures!
      </p>
      <Link to='/contact' className='btn'>
      Contact
      </Link>

    </section>
  )
}

export default CTA
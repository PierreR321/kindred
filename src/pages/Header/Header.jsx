import React from 'react';
import './Header.css';
import Button from '../../components/button/Button';




const Header = () => {


  return (
    <div className='header'>
      <div className='left'>
        <img className='logo' src='/database/logo.jpg' alt='' />
      </div>

      <div className='right'>
        <div className='headtext'>MINT</div>
        <div className='headtext'>TASTMAKERS</div>
        <div className='headtext'>VISION MAP</div>
        <div className='headtext'>TEAM</div>
        <i className="discord fa-brands fa-discord"></i>
        <i class="twitter fa-brands fa-twitter"></i>
        <img className='kind' src='/database/kind.png' alt='' />
        <Button text='CONNECT WALLET' />
      </div>
    </div>
  )
}

export default Header

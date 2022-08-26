import styled from 'styled-components';
import { useState } from 'react';

import './Header.css';
import DropDown from '../../components/DropDown'

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className='header'>
        <div className='left'>
          <img className='logo' src='/img/logo.webp' alt='' />
        </div>

        <div className='right'>
          <div className='headtext'>MINT</div>
          <div className='headtext'>TASTMAKERS</div>
          <div className='headtext'>VISION MAP</div>
          <div className='headtext'>TEAM</div>
          <i className="discord fa-brands fa-discord"></i>
          <i class="twitter fa-brands fa-twitter"></i>
          <img className='kind' src='/img/middle.png' alt='' />
          <WalletButton onClick={() => {}}>CONNECT WALLET</WalletButton>
        </div>

        <button className="dropdownbtn" onClick={() => setShow(!show)}></button>
      </div>
      <div>
        <DropDown isShown={false} />
      </div>
    </div>
  )
}

const WalletButton = styled.div`
  border-radius: 16px;
  border: 0;
  min-height: 32px;
  padding: 4px 16px;
  margin-right: 54px;
  background: rgba(149, 103, 103, 1);
  color: white;
  letter-spacing: 1px;
  font-family: 'Rubik Arial san-serif';
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`

export default Header

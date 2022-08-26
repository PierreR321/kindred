import styled from 'styled-components';
import { useState } from 'react';

import DropDown from './DropDown'
import { desktop, mobile } from "../../utils"

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <MainHeader>
        <HeaderLogo>
          <LogoImg src='/img/logo.webp' alt='' />
        </HeaderLogo>
        <MenuList>
          <MenuItem>MINT</MenuItem>
          <MenuItem>TASTEMAKER</MenuItem>
          <MenuItem>VISION MAP</MenuItem>
          <MenuItem>TEAM</MenuItem>
          <i className="discord fa-brands fa-discord" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px",
            height: "20px",
            padding: "0 16px",
            color: "rgb(149, 103, 103)",
            cursor: "pointer"
          }} />
          <i class="twitter fa-brands fa-twitter" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "20px",
            height: "20px",
            padding: "0 16px",
            color: "rgb(149, 103, 103)",
            cursor: "pointer"
          }} />
          <img
            src='/img/middle.png'
            alt=''
            style={{
              width: "24px",
              height: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 16px"
            }} />
          <WalletButton onClick={() => { }}>CONNECT WALLET</WalletButton>
        </MenuList>
        <DropDownButton onClick={() => setShow(!show)} isShown={show} />
      </MainHeader>
      <div style={{ display: show ? "inherit" : "none"}}><DropDown /></div>

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const MainHeader = styled.div`
  position:fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 84px;
  ${desktop} {
    height: 60px;
  }
  background: #fff3ed;
  z-index: 10000;
`

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
`

const LogoImg = styled.img`
  margin-left: 54px;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  border: 8px solid rgb(255, 249, 247);
  cursor: pointer;
  ${desktop} {
    margin-left: 32px;
    width: 48px;
    height: 48px;
    border: 6px;
  }
`

const MenuList = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${desktop} {
    display: none;
  }
`

const MenuItem = styled.div`
  font-weight: 700;
  color: rgb(149, 103, 103);
  padding: 2px 16px 0;
  font-size: 16px;
  font-family: 'Rubik Arial san-serif';
`

const WalletButton = styled.div`
  border: 0;
  padding: 4px 16px;
  border-radius: 22px;
  margin-right: 54px;
  background: rgba(149, 103, 103, 1);
  color: white;
  letter-spacing: 1px;
  font-family: 'Rubik Arial san-serif';
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`

const DropDownButton = styled.button`
  width: 24px;
  height: 24px;
  background: ${(props) => props.isShown ? "teal" : "pink"};
  margin-right: 24px;
  display: none;
  ${desktop} {
    display: inherit;
  }
`

export default Header;
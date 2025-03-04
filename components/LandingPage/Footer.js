import React from 'react';
import styled from 'styled-components';
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <LeftContainer>
          Contact Us! <br></br>
          Phone Number: 123-456-7890 <br></br>
          Email: PurrfectPals@gmail.com
        </LeftContainer>
        <CenterContainer>
          Center Container information <br></br>
          <Link href="#">Privacy Policy</Link> | <Link href="#">Terms of Service</Link>
        </CenterContainer>
        <RightContainer>
          Right Container Information
          <br></br>
          Follow us on social media!
          <br></br><br></br>
          <SocialIcon href="#"><CiInstagram /></SocialIcon>
          <SocialIcon href="#"><FaFacebookF /></SocialIcon>
        </RightContainer>
        <BottomContainer>
          Website icon 
          @{new Date().getFullYear()} PurrfectPals.com
        </BottomContainer>
      </FooterContainer>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background-color: #062e3d;
  color: white;
  font-size: 16px;
  margin: 100 px;
  padding: 30px;
`;


// Need to make the grid flexible 
const FooterContainer = styled.div`
  font-family: "Comic sans";

  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: auto 50px;
  column-gap: 10px;
  row-gap: 15px;

  justify-items: center;
  align-items: center; 
  justify-content: center;
  flex-wrap: wrap;
  
`;

const LeftContainer = styled.div`
  text-align: center;
`;

const CenterContainer = styled.div`
  text-align: center;
`;

const RightContainer = styled.div`
  text-align: center;
`;

const BottomContainer = styled.div`
  text-align: center;
`;

const Link = styled.a`
  color: #43DFBD;
  &:hover {
    color:#8a8a8a;
  }

`;

// Will change this once I get icons instead 
const SocialIcon = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 5px;

  color: #43DFBD;
  &:hover {
    color: #8a8a8a;
  }
`;

export default Footer;

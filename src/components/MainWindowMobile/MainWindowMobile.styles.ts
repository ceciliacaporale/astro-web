import styled from "styled-components";

const COLORS = {
  pink: "#FE87A4",
  teal: "#1CBFC1",
  green: "#94EE9C",
};

export const MainWindowMobileWrapper = styled.div`
  width: 96%;
  height: auto;
  background: white;
  border-radius: 2rem;
  top: 1rem;
  border: 2px solid #000;
  display: flex;
  position: absolute;
  flex-direction: column;
  overflow: hidden;
`;

export const WindowHeader = styled.div`
  border-radius: 12px 12px 0 0;
  padding: 0 12px;
`;

export const WindowButtons = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 1rem;
  span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    border: 1px solid #000;
  }

  .close {
    background: rgb(252, 65, 174);
  }
  .minimize {
    background: #ffbd2e;
  }
  .maximize {
    background: rgb(102, 240, 123);
  }
`;

export const Container = styled.div`
  padding: 10px;

  .star-green {
    position: absolute;
    top: 20rem;
    right: 13rem;
    z-index: 9999;
  }

  .star-pink {
    position: absolute;
    top: 5rem;
    left: 13rem;
    z-index: 9999;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 10px;
  flex-direction: column;
  justify-content: center;

  h1 { 
    font-family: "Squada One", sans-serif;
    color: #FDF282;
    text-shadow: .05em .05em 0 #000;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 5rem;
    -webkit-text-stroke: .025em #000;
    margin-bottom: 8px;
  }

  p {
    font-size: 1.8rem;
    font-family: "Inter", sans-serif;
    text-align: left;
    margin-bottom: 4rem;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerSocialMedia = styled.div`
  position: absolute;
  top: 41rem;
  width: 58%;
  z-index: 999;
`;

export const Tab = styled.div`
  padding: 6px 24px;
  border-radius: 8px 8px 0 0;
  font-size: 20px;
  position: relative;
  font-family: "Pixelify Sans", sans-serif;
  
  .close-tab {
    font-size: 13px;
    color: #000;
    transition: color 0.2s ease-in-out;
    
    &:hover {
      color: rgb(107, 105, 105);
    }
  }

  &:nth-child(1) {
    background: ${COLORS.pink};
  }
  
  &:nth-child(2) {
    background: ${COLORS.teal}; 
  }
  
  &:nth-child(3) {
    background: ${COLORS.green};
  }
`;

export const TabsContainer = styled.div`
  position: absolute;
  top: -20px;
  z-index: 1;
  display: flex;
  transition: transform 0.2s ease-in-out;
  left: 5rem;

  :hover {
    transform: scale(1.1);
    z-index: 999;
  }
`;

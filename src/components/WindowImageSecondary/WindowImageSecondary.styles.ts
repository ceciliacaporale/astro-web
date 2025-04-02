import styled from "styled-components";

interface WindowProps {
  width?: string;
  height?: string;
}

interface HeaderProps {
  headerColor?: string;
}

export const WindowImageSecondaryWrapper = styled.div<WindowProps>`
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "200px"};
  background: white;
  border-radius: 10px;
  z-index: 9;
  border: 2px solid #000;
  overflow: hidden;
  flex-direction: column;
  
  @media (max-width: 979px) and (min-width: 796px) {
    margin-top: 2rem;
    height: 200px;
  }
`;

export const Header = styled.div<HeaderProps>`
  height: 25px;
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  background-color: ${(props) => props.headerColor || "#FDF28D"};
  border-bottom: 2px solid black;
  padding: 0 12px;
  border-radius: 10px 10px 0 0;
  position: relative;
  font-weight: bold;
  font-size: 14px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const WindowButtons = styled.div`
  display: flex;
  gap: 5px;
`;

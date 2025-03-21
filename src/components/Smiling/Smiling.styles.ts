import styled from "styled-components";

export const SmilingWrapper = styled.div`
  width: 235px;
  height: 45px;
  background: white;
  border-radius: 10px;
  box-shadow: 8px 8px 0 #000;
  position: relative;
  top: 350px;
  translate: -6px -6px;
  border: 2px solid #000000;
  z-index: 99999;
  user-select: none;
  cursor: grab;

  img {
    -webkit-user-drag: none;
    pointer-events: none; 
  }
  `;


export const Content = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  justify-content: space-between;
`;



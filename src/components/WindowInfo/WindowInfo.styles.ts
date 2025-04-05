import styled from "styled-components";

const SIZES = {
  width: "150px",
  height: "100px",
  headerHeight: "24px",
};

export const WindowInfoWrapper = styled.div`
  width: ${SIZES.width};
  height: ${SIZES.height};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  position: absolute;
  z-index: 99;
  box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.black};
  user-select: none;
  overflow: hidden;
`;

export const Header = styled.div`
  height: ${SIZES.headerHeight};
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.blue};
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  padding: 0 10px;
  font-family: "Pixelify Sans", sans-serif;
  cursor: grab;
  gap: 5px;

  &:active {
    cursor: grabbing;
  }
`;

export const Content = styled.div`
  padding: 10px;
  display: flex;
  position: relative;
  height: calc(100% - ${SIZES.headerHeight});
  box-sizing: border-box;

  p { 
    max-width: 117px;
    font-size: 12px;
    line-height: 1.4;
    margin: 0;
  }

  .star-decoration {
    position: absolute;
    img {
      top: -30px;
      left: 110px;
      position: relative;
      pointer-events: none;
    }
  }
`;
import styled from "styled-components";

export const RetroComputerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  padding: 12px;
  border-radius: 10px;
  border: 3px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 6px 6px 0px ${({ theme }) => theme.colors.borderColor};
  width: 170px;
  z-index: 9;
  cursor: grab;
  user-select: none;
`;

export const Monitor = styled.div`
  width: 140px;
  height: 110px;
  background: ${({ theme }) => theme.colors.lime};
  border: 3px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 6px;
  position: relative;
  box-shadow: inset 0px 0px 8px rgba(255, 255, 255, 0.1);
  
`;

export const ScreenContent = styled.pre`
  color: ${({ theme }) => theme.colors.borderColor};
  font-family: monospace;
  font-size: 12.5px;
  padding: 4px;
  white-space: pre-wrap;
  font-family: "Pixelify Sans", sans-serif;
`;

export const Keyboard = styled.div`
  width: 125px;
  height: 55px;
  background: rgb(240, 240, 240);
  border: 2px solid${({ theme }) => theme.colors.borderColor};
  border-radius: 6px;
  margin-top: 6px;
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  padding: 1px;
`;

export const Key = styled.div`
  width: 14px;
  height: 14px;
  background: ${({ theme }) => theme.colors.white};
  border: 1.7px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6px;
  color: ${({ theme }) => theme.colors.black};
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.2);
`;

export const keys = "QWERTYUIOPASDFGHJKLZXCVB".split("");

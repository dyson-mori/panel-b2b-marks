import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  position: fixed;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  transition: .3s;

  background-color: #000000aa;
  backdrop-filter: blur(5px);
`;

export const Content = styled.section`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 25px 10px;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.settings.radius.small};
  `};
`;
import styled, { css } from "styled-components";

export const Container = styled.header`
  /* position: fixed;
  top: 0; */

  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;
  
  background-color: #fff;
  
  ${({ theme }) => css`
    box-shadow: ${theme.settings.box.header};
    border-radius: ${theme.settings.radius.small}
  `};

  a {
    margin: 0 25px;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    color: #303030;
  }
`;
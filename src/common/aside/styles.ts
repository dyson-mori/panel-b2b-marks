import styled, { css } from "styled-components";

export const Container = styled.aside`
  display: flex;

  /* justify-content: space-around; */
  align-items: center;
  flex-direction: column;

  min-width: 200px;

  background-color: #fff;

  ${({ theme }) => css`
    box-shadow: ${theme.settings.box.header};
  `};

  a {
    display: flex;

    align-items: center;

    padding: 10px 0;

    width: 100%;

    font-weight: 500;
    font-size: 13px;
    text-decoration: none;
    color: #303030;
  };

  svg {
    margin-left: 10px;
  }

  span {
    width: 1px;
    height: 20px;

    margin: 0 10px;

    background-color: #DEDEDE;
  }
`;

export const Header = styled.header`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 115px;
`;

export const Nav = styled.nav`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const Footer = styled.footer`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 115px;

  a {
    display: flex;

    justify-content: center;
    align-items: center;

    padding: 10px 0;

    width: 100%;

    font-weight: 500;
    font-size: 13px;
    text-decoration: none;
    color: #303030;
  };
`;
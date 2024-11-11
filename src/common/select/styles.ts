import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;

  height: 50px;

  ${({ theme }) => css`
    box-shadow: ${theme.settings.box.input};
    border-radius: ${theme.settings.radius.small};
  `};

  span {
    width: 50px;
    height: 50px;
    background-color: #fff;
  };

  span > svg {
    position: relative;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  };

  input {
    border: 0;
    outline: 0;

    width: 100%;
  };
`;

export const DropDown = styled.div`
  position: absolute;

  top: 55px;

  min-height: 50px;

  background-color: #fff;

  z-index: 2;

  ${({ theme }) => css`
    box-shadow: ${theme.settings.box.input};
    border-radius: ${theme.settings.radius.small};
  `};

  button {
    display: flex;
    align-items: center;

    width: 100%;
    height: 50px;

    text-align: left;

    padding: 0 44px;
    font-weight: 500;

    background-color: #fff;

    ${({ theme }) => css`
      color: #707070;
    `};
  };

  button:hover {
    background-color: #fafafa;
  };
`;
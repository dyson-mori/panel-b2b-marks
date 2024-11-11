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
    min-width: 50px;
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

  button {
    display: flex;

    align-items: center;
    justify-content: center;

    min-width: 50px;
    height: 50px;
  };
`;

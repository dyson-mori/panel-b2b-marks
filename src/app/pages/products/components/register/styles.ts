import styled, { css } from 'styled-components';

export const Container = styled.form`
  display: flex;

  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const Sides = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 50%;
  height: 100%;

  overflow: hidden;

  margin: 0 0 5px 0;
  padding: 20px 40px;

  label {
    display: flex;

    justify-content: center;
    align-items: center;

    width: 400px;
    height: 400px;

    cursor: pointer;

    background-color: #fff;

    ${({ theme }) => css`
      box-shadow: ${theme.settings.box.default};
      border-radius: ${theme.settings.radius.small};
    `};
  };
`;

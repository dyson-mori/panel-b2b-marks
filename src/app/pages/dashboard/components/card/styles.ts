import styled, { css } from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;

  justify-content: space-between;

  width: 100%;
`;

export const Content = styled.div`
  display: flex;

  flex-direction: column;

  width: 100%;

  background-color: #fff;

  padding: 5px 15px;
  margin: 0px 5px;

  .down {
    margin: 5px 0;
    font-size: 14px;
    margin-left: -2px;
  };

  .down > span {
    font-weight: 500;
  }

  ${({ theme }) => css`
    box-shadow: ${theme.settings.box.default};
    border-radius: ${theme.settings.radius.small};
  `};

  &:nth-child(1) {
    margin-left: 0px;
  };

  &:last-child {
    margin-right: 0px;
  };
`;

export const Up = styled.div`
  display: flex;

  align-items: center;

  width: 100%;
  height: 100%;

  span {
    min-width: 4px;
    height: 40px;

    background-color: #4050D0;
    border-radius: 3px;
  };

  .title {
    width: 100%;
    margin: 0px 15px;
  };

  svg {
    min-width: 50px;
  };
`;

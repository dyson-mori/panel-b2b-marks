import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;

  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 0 10px;
`;

export const ContainerButton = styled.div`
  position: relative;
`;

export const MiniModal = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  position: absolute;

  width: 0;
  height: 0;

  bottom: 0;
  right: 0;

  transition: .5s;

  ${({ theme }) => css`
    box-shadow: ${theme.settings.box.input};
    border-radius: ${theme.settings.radius.medium};
  `};

  background-color: white;
`;
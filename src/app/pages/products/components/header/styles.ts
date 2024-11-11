import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;

  margin: 10px 0;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `};
`;
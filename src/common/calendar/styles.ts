import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.settings.radius.small};
  `};
`;

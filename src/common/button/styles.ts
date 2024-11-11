import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export const Container = styled.button<ButtonProps>`
  display: flex;

  justify-content: center;
  align-items: center;

  border: 0;

  min-height: 50px;

  ${({ theme }) => css`
    border-radius: ${theme.settings.radius.small}
  `};

  cursor: pointer;
`;
  // ${({ theme, disabled, primary, secondary }) => primary === 'true' && secondary === 'false' && css`
  //   color: ${theme.colors.white};
  //   font-weight: ${theme.font.weight[700]};
  //   background-color: ${theme.colors[disabled ? 'primary_loading' : 'primary']};
  // `};

  // ${({ theme, disabled, secondary }) => secondary  === 'true' && css`
  //   color: ${theme.colors.primary};
  //   font-weight: ${theme.font.weight[500]};
  //   border: 1px solid ${theme.colors[disabled ? 'primary_loading' : 'primary']};
  //   background-color: ${theme.colors[disabled ? 'primary_loading' : 'background']};
  // `};

  // ${({ theme, disabled }) => css`
  //   box-shadow: ${theme.settings.box.simple};
  //   border-radius: ${theme.settings.radius.small};
  //   cursor: ${disabled ? 'default' : 'pointer'};
  // `};
import styled, { css } from "styled-components";

import { Select } from '../../../../common';

export const Container = styled.main`
  display: flex;

  align-items: center;
  justify-content: center;

  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 0 10px;
`;

export const Empty = styled.div`
  width: 90%;
  height: 90%;

  transition: .5s;

  ${({ theme }) => css`
    border-radius: ${theme.settings.border.radius.medium};
  `};
`;

export const SelectStyled = styled(Select)`
  /* margin: 10px; */
`;
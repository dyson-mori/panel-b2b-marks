import styled, { css } from "styled-components";

import { Select } from '../../../../common';

export const Container = styled.main`
  display: flex;

  align-items: center;
  /* justify-content: center; */

  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 0 10px;
`;

export const Header = styled.section`
  display: flex;

  width: 100%;

  margin: 10px 0;
`;

export const SelectStyled = styled(Select)`
  /* margin: 10px; */
`;
import styled, { css } from "styled-components";

export const Container = styled.table`
  border-collapse: collapse;
  font-size: 0.8em;
  width: 100%;

  border-radius: 5px 5px 0 0;
  overflow: hidden;

  text-align: center;

  ${({ theme }) => css`
    box-shadow: ${theme.settings.box.default};
    background-color: ${theme.colors.white};
  `};

  thead tr {
    color: #fff;

    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
    `};
  };

  th,
  td {
    padding: 12px 15px;
  };

  tbody tr {
    border-bottom: 1px solid #ddd;
  };

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  };

  tbody tr:last-of-type {
    ${({ theme }) => css`
      border-bottom: 2px solid ${theme.colors.primary};
    `};
  };

  tbody tr.active-row {
    ${({ theme }) => css`
      font-weight: bold;
      color: ${theme.colors.primary};
    `};
  };

  tbody td.actions,
  thead th.actions {
    display: flex;

    justify-content: space-evenly;
    /* background-color: #ddddddaa; */
  };
`;

import styled, { css } from "styled-components";

export const Container = styled.section`
  margin: 10px 0;

  tspan {
    font-family: var(--font-montserrat);
    font-size: 12px;
    font-weight: 600;
  }

  ${({ theme }) => css`
    background-color: #fff;
    border-radius: ${theme.settings.border.radius.small};
    box-shadow: ${theme.settings.box.default};
  `};
`;

export const ChartTooltipContent_Container = styled.div`
  display: grid;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem; 
  gap: 0.375rem; 
  align-items: flex-start; 
  border-radius: 0.5rem; 
  border-width: 1px; 
  font-size: 0.75rem;
  line-height: 1rem; 
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); 
`;
import styled, { css } from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  width: 302px;

  tspan, p {
    font-family: var(--font-montserrat);
  };

  ${({ theme }) => css`
    box-shadow: ${theme.settings.box.input};
    border-radius: ${theme.settings.radius.small};
    background-color: ${theme.colors.white};
  `};
`

export const CardHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`

export const CardTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 8px;
`

export const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
`

export const ChartContainer = styled.div`
  height: 200px;
  margin-bottom: 20px;
`

export const CardFooter = styled.div`
  font-size: 14px;
  color: #666;
  text-align: center;
`
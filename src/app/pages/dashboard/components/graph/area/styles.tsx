import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-left: 10px;

  tspan, p {
    font-family: var(--font-montserrat);
  };

  ${({ theme }) => css`
    box-shadow: ${theme.settings.box.input};
    border-radius: ${theme.settings.radius.small};
    background-color: ${theme.colors.white};
  `};
`;

export const CardHeader = styled.div`
  padding: 1.5rem;
`

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-family: var(--font-montserrat);
`

export const CardDescription = styled.p`
  color: #666;
  font-size: 0.875rem;
`

export const CardContent = styled.div`
  padding: 1.5rem;
`

export const CardFooter = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #eaeaea;
`

export const FooterContent = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.875rem;
`

export const FooterInfo = styled.div`
  display: grid;
  gap: 0.5rem;
`

export const TrendingInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
`

export const DateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
`

export const ChartLegendWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const LegendColor = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background-color: ${props => props.color};
  border-radius: 50%;
`
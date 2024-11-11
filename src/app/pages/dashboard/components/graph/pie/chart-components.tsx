import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { TooltipProps } from 'recharts';

// ChartConfig type
export type ChartConfig = {
  [key: string]: {
    label: string;
    color: string;
  };
};

// ChartContainer
const StyledChartContainer = styled.div<{ $config: ChartConfig }>`
  ${({ $config }) => Object.entries($config).map(([key, value]) => `
    --color-${key}: ${value.color};
  `).join('\n')}
`;

interface ChartContainerProps {
  config: ChartConfig;
  children: ReactNode;
  className?: string;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ config, children, className }) => (
  <StyledChartContainer $config={config} className={className}>
    {children}
  </StyledChartContainer>
);

// ChartTooltip
interface ChartTooltipProps {
  content: React.ReactNode;
  cursor?: boolean | object;
}

export const ChartTooltip: React.FC<ChartTooltipProps> = ({ content, cursor = false }) => (
  <TooltipWrapper cursor={cursor} content={content} />
);

// Este é um componente fictício para simular o comportamento do Tooltip do Recharts
const TooltipWrapper: React.FC<TooltipProps<any, any>> = ({ content, ...props }) => (
  <foreignObject {...props}>
    {React.isValidElement(content) ? content : null}
  </foreignObject>
);

// ChartTooltipContent
const TooltipContainer = styled.div`
  background-color: hsl(var(--background));
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  padding: 0.5rem;
`;

const TooltipItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TooltipColor = styled.div<{ $color: string }>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: ${props => props.$color};
`;

const TooltipLabel = styled.span`
  font-weight: 500;
`;

const TooltipValue = styled.span`
  margin-left: auto;
  font-variant-numeric: tabular-nums;
`;

interface ChartTooltipContentProps {
  active?: boolean;
  payload?: Array<{ title: string; quantity: number; color: string }>;
  label?: string;
  config: ChartConfig;
  hideLabel?: boolean;
}

export const ChartTooltipContent: React.FC<ChartTooltipContentProps> = ({
  active,
  payload,
  label,
  config,
  hideLabel = false,
}) => {
  if (!active || !payload) return null;

  return (
    <TooltipContainer>
      {!hideLabel && <div>{label}</div>}
      {payload.map((entry, index) => (
        <TooltipItem key={index}>
          <TooltipColor $color={entry.color || config[entry.title]?.color} />
          <TooltipLabel>{config[entry.title]?.label || entry.title}</TooltipLabel>
          <TooltipValue>{entry.quantity}</TooltipValue>
        </TooltipItem>
      ))}
    </TooltipContainer>
  );
};
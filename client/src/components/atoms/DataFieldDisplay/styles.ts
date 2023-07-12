import { styled } from 'styled-components';

export const StyledDisplayField = styled.div<{
  $align?: 'left' | 'center' | 'right';
}>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(props) =>
    props.$align === 'right'
      ? 'end'
      : props.$align === 'center'
      ? 'center'
      : 'start'};

  white-space: nowrap;
`;

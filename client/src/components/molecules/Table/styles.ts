import { styled } from 'styled-components';

export const StyledTable = styled.div`
  display: grid;
`;

export const StyledTableRowWrapper = styled.div`
  display: contents;
`;

const StyledTableBlock = styled.div<{ $column: number }>`
  grid-column: ${(props) => props.$column};
`;

export const StyledTableCell = styled(StyledTableBlock)<{
  $column: number;
  $row: number;
}>`
  grid-row: ${(props) => props.$row};
`;

export const StyledTableColHeader = styled(StyledTableBlock)<{
  $column: number;
  $align?: 'left' | 'center' | 'right';
}>`
  grid-row: 1;
  grid-column: ${(props) => props.$column};

  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(props) =>
    props.$align === 'right'
      ? 'end'
      : props.$align === 'center'
      ? 'center'
      : 'start'};
`;

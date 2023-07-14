import { styled } from 'styled-components';

// https://m3.material.io/components/lists/specs

export const StyledTable = styled.div<{
  $rowCount?: number;
  $colCount?: number;
}>`
  display: grid;
  width: 100%;
  margin-bottom: 8px;

  grid-template-rows: ${(props) =>
    props.$rowCount
      ? `repeat(${props.$rowCount}, minmax(56px, auto))`
      : 'initial'};

  grid-template-columns: ${(props) =>
    props.$colCount
      ? `repeat(${props.$colCount - 1}, auto) min-content`
      : 'initial'};
`;

export const StyledTableRowWrapper = styled.div<{ $highlight?: boolean }>`
  display: contents;

  form {
    display: contents;
  }

  &:hover {
    & > .underlay {
      background-color: color-mix(
        in srgb,
        var(--md-sys-color-on-surface)
          var(--md-sys-state-hover-state-layer-opacity),
        var(--md-sys-color-surface)
      );
    }
  }
`;

const StyledTableBlock = styled.div<{ $column: number }>`
  grid-column: ${(props) => props.$column};

  padding-left: 16px;
  padding-right: 8px;
`;

export const StyledTableCell = styled(StyledTableBlock)<{
  $column: number;
  $row: number;
  $highlight?: boolean;
}>`
  grid-row: ${(props) => props.$row};

  display: flex;
  align-items: center;

  min-height: 56px;
`;

export const StyledTableRowUnderlay = styled.div<{
  $row: number;
  $columnSpan: number;
  $highlight?: boolean;
}>`
  grid-row: ${(props) => props.$row};
  grid-column: 1 / span ${(props) => props.$columnSpan};
`;

export const StyledTableRowUnderlay1 = styled(StyledTableRowUnderlay)<{
  $row: number;
  $columnSpan: number;
  $highlight?: boolean;
}>`
  background-color: ${(props) =>
    props.$highlight
      ? 'color-mix( in srgb, var(--md-sys-color-on-surface) var(--md-sys-state-focus-state-layer-opacity), var(--md-sys-color-surface) )'
      : 'var(--md-sys-color-surface)'};
`;

export const StyledTableRowUnderlay2 = styled(StyledTableRowUnderlay)<{
  $row: number;
  $columnSpan: number;
  $highlight?: boolean;
}>`
  margin-left: 16px;
  margin-right: 16px;
  border-bottom: 1px solid var(--md-sys-color-surface-variant);
`;

export const StyledButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

export const StyledPromptBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
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

  align-items: center;

  color: var(--md-sys-color-on-surface-variant);
  font-weight: 600;
`;

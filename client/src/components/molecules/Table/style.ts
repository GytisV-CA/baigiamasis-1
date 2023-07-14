import { styled } from 'styled-components';

// https://m3.material.io/components/lists/specs

export const StyledTable = styled.div<{
  $rowCount?: number;
  $colCount?: number;
}>`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;

  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: grid;

    grid-template-rows: ${(props) =>
      props.$rowCount
        ? `repeat(${props.$rowCount}, minmax(56px, auto))`
        : 'initial'};

    grid-template-columns: ${(props) =>
      props.$colCount
        ? `repeat(${props.$colCount - 1}, auto) min-content`
        : 'initial'};
  }
`;

export const StyledTableRowWrapper = styled.div<{ $highlight?: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;

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

  @media screen and (min-width: 768px) {
    display: contents;
    position: initial;
  }
`;

const StyledTableBlock = styled.div<{ $column: number }>`
  padding-left: 16px;
  padding-right: 8px;

  @media screen and (min-width: 768px) {
    grid-column: ${(props) => props.$column};
  }
`;

export const StyledTableCell = styled(StyledTableBlock)<{
  $column: number;
  $row: number;
  $highlight?: boolean;
}>`
  display: flex;
  align-items: center;

  min-height: 40px;

  .md-text-field {
    width: 100%;

    input {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    grid-row: ${(props) => props.$row};
    min-height: 56px;
  }
`;

export const StyledTableRowUnderlay = styled.div<{
  $row: number;
  $columnSpan: number;
  $highlight?: boolean;
}>`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media screen and (min-width: 768px) {
    position: initial;
    grid-row: ${(props) => props.$row};
    grid-column: 1 / span ${(props) => props.$columnSpan};
  }
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

  min-height: 48px;
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
  display: none;

  @media screen and (min-width: 768px) {
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
  }
`;

import styled from 'styled-components';

export type StyledButtonVariants =
  | 'elevated'
  | 'filled'
  | 'tonal'
  | 'outlined'
  | 'text';

export const StyledButton = styled.button<{
  $variant: StyledButtonVariants;
}>`
  box-sizing: border-box;
  min-height: 40px;
  min-width: 40px;
  border-radius: 20px;
  border-style: none;
  padding: 8px 24px;
  gap: 8px;
  transition: background 100ms, box-shadow 100ms;

  box-shadow: ${(props) =>
    props.$variant === 'elevated'
      ? '0 1px var(--shadow-blur-elevation-1) 0 var(--color-shadow-transparent)'
      : 'none'};

  background-color: ${(props) =>
    props.$variant === 'elevated'
      ? 'var(--md-sys-color-surface-container-low)'
      : props.$variant === 'filled'
      ? 'var(--md-sys-color-primary)'
      : 'initial'};

  color: ${(props) =>
    props.$variant === 'elevated'
      ? 'var(--md-sys-color-primary)'
      : props.$variant === 'filled'
      ? 'var(--md-sys-color-on-primary)'
      : 'initial'};

  &:hover {
    box-shadow: ${(props) =>
      props.$variant === 'elevated'
        ? '0 1px var(--shadow-blur-elevation-2) 0 var(--color-shadow-transparent)'
        : 'none'};

    background-color: ${(props) =>
      props.$variant === 'elevated'
        ? 'color-mix( in srgb, var(--md-sys-color-primary) var(--md-sys-state-hover-state-layer-opacity), var(--md-sys-color-surface-container-low) )'
        : props.$variant === 'filled'
        ? 'color-mix( in srgb, var(--md-sys-color-on-primary) var(--md-sys-state-hover-state-layer-opacity), var(--md-sys-color-primary) )'
        : 'none'};
  }

  &:focus,
  &:active {
    outline: ${(props) =>
      ['elevated', 'filled'].includes(props.$variant) ? 'none' : 'initial'};
    background-color: ${(props) =>
      props.$variant === 'elevated'
        ? 'color-mix( in srgb, var(--md-sys-color-primary) var(--md-sys-state-focus-state-layer-opacity), var(--md-sys-color-surface-container-low) )'
        : props.$variant === 'filled'
        ? 'color-mix( in srgb, var(--md-sys-color-on-primary) var(--md-sys-state-focus-state-layer-opacity), var(--md-sys-color-primary) )'
        : 'none'};
  }
`;

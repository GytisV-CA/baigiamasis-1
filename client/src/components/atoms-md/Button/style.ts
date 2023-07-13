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
`;

export const StyledButtonElevated = styled(StyledButton)`
  box-shadow: 0 1px var(--shadow-blur-elevation-1) 0
    var(--color-shadow-transparent);

  background-color: var(--md-sys-color-surface-container-low);
  color: var(--md-sys-color-primary);

  &:hover {
    box-shadow: 0 1px var(--shadow-blur-elevation-2) 0
      var(--color-shadow-transparent);

    background-color: color-mix(
      in srgb,
      var(--md-sys-color-primary) var(--md-sys-state-hover-state-layer-opacity),
      var(--md-sys-color-surface-container-low)
    );
  }

  &:focus,
  &:active {
    outline: none;
    background-color: color-mix(
      in srgb,
      var(--md-sys-color-primary) var(--md-sys-state-focus-state-layer-opacity),
      var(--md-sys-color-surface-container-low)
    );
  }
`;

export const StyledButtonFilled = styled(StyledButton)`
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);

  &:hover {
    background-color: color-mix(
      in srgb,
      var(--md-sys-color-on-primary)
        var(--md-sys-state-hover-state-layer-opacity),
      var(--md-sys-color-primary)
    );
    box-shadow: 0 1px var(--shadow-blur-elevation-1) 0
      var(--color-shadow-transparent);
  }

  &:focus,
  &:active {
    outline: none;
    background-color: color-mix(
      in srgb,
      var(--md-sys-color-on-primary)
        var(--md-sys-state-focus-state-layer-opacity),
      var(--md-sys-color-primary)
    );
  }

  &::disabled {
    box-shadow: none;

    background-color: var(--color-on-surface-transp-12);
    color: var(--color-on-surface-transp-38);
  }
`;

export const StyledButtonTonal = styled(StyledButton)`
  background-color: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);

  &:hover {
    background-color: color-mix(
      in srgb,
      var(--md-sys-color-on-secondary-container)
        var(--md-sys-state-hover-state-layer-opacity),
      var(--md-sys-color-secondary-container)
    );
    box-shadow: 0 1px var(--shadow-blur-elevation-1) 0
      var(--color-shadow-transparent);
  }

  &:focus,
  &:active {
    outline: none;
    background-color: color-mix(
      in srgb,
      var(--md-sys-color-on-secondary-container)
        var(--md-sys-state-hover-state-layer-opacity),
      var(--md-sys-color-secondary-container)
    );
  }
`;

export const StyledButtonOutlined = styled(StyledButton)`
  border-style: solid;
  border-width: 1px;

  background-color: #0000;
  border-color: var(--md-sys-color-outline);
  color: var(--md-sys-color-primary);

  &:hover {
    background-color: color-mix(
      in srgb,
      var(--md-sys-color-primary) var(--md-sys-state-hover-state-layer-opacity),
      #0000
    );
  }

  &:focus,
  &:active {
    outline: none;
    background-color: color-mix(
      in srgb,
      var(--md-sys-color-primary) var(--md-sys-state-focus-state-layer-opacity),
      #0000
    );
    border-color: var(--md-sys-color-primary);
  }
`;

export const StyledButtonText = styled(StyledButton)`
  background-color: #0000;
  color: var(--md-sys-color-primary);

  background-color: #0000;
  border-color: var(--md-sys-color-outline);
  color: var(--md-sys-color-primary);

  &:hover {
    background-color: color-mix(
      in srgb,
      var(--md-sys-color-primary) var(--md-sys-state-hover-state-layer-opacity),
      #0000
    );
  }

  &:focus,
  &:active {
    outline: none;
    background-color: color-mix(
      in srgb,
      var(--md-sys-color-primary) var(--md-sys-state-focus-state-layer-opacity),
      #0000
    );
  }
`;

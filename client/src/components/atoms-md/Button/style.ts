import styled from 'styled-components';

// https://m3.material.io/components/buttons/specs

export type StyledButtonVariants =
  | 'elevated'
  | 'filled'
  | 'tonal'
  | 'outlined'
  | 'text'
  | 'fab';

export const StyledButton = styled.button<{
  $variant: StyledButtonVariants;
  $iconOnly?: boolean;
}>`
  box-sizing: border-box;
  min-height: 40px;
  min-width: 40px;
  border-radius: 20px;
  border-style: none;
  gap: 8px;
  padding: ${(props) => (props.$iconOnly ? '4px' : '8px 24px')};
  font-size: ${(props) =>
    props.$iconOnly ? '24px' : 'var(--md-sys-typescale-label-large-font-size)'};
  line-height: ${(props) =>
    props.$iconOnly ? '24px' : 'var(--md-sys-typescale-label-large-height)'};
  max-height: ${(props) => (props.$iconOnly ? '40px' : 'initial')};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 100ms, box-shadow 100ms;
  cursor: pointer;
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

export const StyledButtonFAB = styled(StyledButton)`
  min-height: 56px;
  min-width: 56px;
  border-radius: 16px;
  font-size: 36px;
  padding: ${(props) => (props.$iconOnly ? '8px' : '16px')};
  max-height: ${(props) => (props.$iconOnly ? '56px' : 'initial')};

  box-shadow: 0 1px var(--shadow-blur-elevation-3) 0
    var(--color-shadow-transparent);

  background-color: var(--md-sys-color-surface);
  color: var(--md-sys-color-primary);

  &:hover {
    box-shadow: 0 1px var(--shadow-blur-elevation-4) 0
      var(--color-shadow-transparent);

    background-color: color-mix(
      in srgb,
      var(--md-sys-color-primary) var(--md-sys-state-hover-state-layer-opacity),
      var(--md-sys-color-surface)
    );
  }

  &:focus,
  &:active {
    outline: none;
    background-color: color-mix(
      in srgb,
      var(--md-sys-color-primary) var(--md-sys-state-focus-state-layer-opacity),
      var(--md-sys-color-surface)
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

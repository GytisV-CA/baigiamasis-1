import styled from 'styled-components';

// https://m3.material.io/components/text-fields/specs

export type StyledTextFieldVariants = 'filled' | 'outlined';

export const StyledInputContainer = styled.div<{
  $variant: StyledTextFieldVariants;
}>`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
`;

export const StyledInput = styled.input`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 8px;
  min-height: 56px;

  color: var(--md-sys-color-on-surface);

  & + label {
    font-size: var(--md-sys-typescale-body-large-font-size);
    line-height: var(--md-sys-typescale-body-large-height);
    left: 16px;
    top: 20px;

    cursor: text;
  }

  &:not(input:placeholder-shown) ~ label {
    font-size: var(--md-sys-typescale-body-small-font-size);
    line-height: var(--md-sys-typescale-body-small-height);
    transition: all 0.1s;

    cursor: default;
  }

  &:focus {
    outline: none;
    border-color: var(--md-sys-color-primary);

    & + label {
      color: var(--md-sys-color-primary);
    }
  }

  &:disabled + label,
  &:disabled + label + .input-supporting-text {
    color: var(--color-on-surface-transp-38);
  }
`;

export const StyledInputFilled = styled(StyledInput)`
  border-style: none;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-radius: var(--border-radius-shape-extra-small-top);

  background-color: var(--md-sys-color-surface-container-highest);
  border-color: var(--md-sys-color-on-surface-variant);
  color: var(--md-sys-color-on-surface);

  &:focus {
    border-bottom-width: 2px;
    padding-bottom: 7px;
    padding-left: 15px;
    padding-right: 15px;

    & + label {
      color: var(--md-sys-color-primary);
    }
  }

  &:not(input:placeholder-shown) {
    padding-top: 18px;

    & ~ label {
      top: 8px;
    }
  }

  &:hover {
    background-color: color-mix(
      in srgb,
      var(--md-sys-color-on-surface)
        var(--md-sys-state-hover-state-layer-opacity),
      var(--md-sys-color-surface-variant)
    );
  }

  &:disabled {
    background-color: var(--color-on-surface-transp-04);
    border-color: var(--color-on-surface-transp-38);
    color: var(--color-on-surface-transp-38);
  }
`;

export const StyledInputOutlined = styled(StyledInput)<{
  $containerBackgroundColor?: string;
}>`
  border-style: solid;
  border-width: 1px;
  border-radius: var(--border-radius-shape-extra-small);

  background: none;
  border-color: var(--md-sys-color-outline);

  &:focus {
    border-width: 2px;
    padding-bottom: 7px;
  }

  &:not(input:placeholder-shown) ~ label {
    top: -6px;
    padding: 0 4px;
    background-color: ${(props) =>
      props.$containerBackgroundColor ?? 'var(--md-sys-color-surface)'};
    /* hack with background */
  }

  &:hover {
    border-color: var(--md-sys-color-on-surface);

    & + label {
      color: var(--color-on-surface);
    }
  }

  &:disabled {
    border-color: var(--color-on-surface-transp-12);
    color: var(--color-on-surface-transp-38);
  }
`;

export const StyledPlaceholder = styled.label<{
  $variant: StyledTextFieldVariants;
}>`
  position: absolute;

  color: var(--md-sys-color-on-surface-variant);
`;

export const StyledSupportingText = styled.div<{
  $variant: StyledTextFieldVariants;
}>`
  padding-left: 16px;
  padding-right: 16px;

  color: var(--md-sys-color-on-surface-variant);
`;

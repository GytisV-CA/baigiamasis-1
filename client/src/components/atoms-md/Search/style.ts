import styled from 'styled-components';

// https://m3.material.io/components/search/specs

export const StyledSearchContainer = styled.div`
  position: relative;
  height: 56px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;

  padding-left: 56px;
  border-radius: var(--border-radius-shape-extra-large);

  outline: none;
  border: none;
  background-color: var(--md-sys-color-surface-container-high);
  color: var(--md-sys-color-on-surface);

  &::placeholder {
    color: var(--md-sys-color-on-surface-variant);
  }
`;

export const StyledIcon = styled.span`
  position: absolute;
  font-size: 24px;
  line-height: 24px;
  left: 16px;
  top: 16px;

  color: var(--md-sys-color-on-surface);
`;

import styled from 'styled-components';

// https://m3.material.io/components/segmented-buttons/specs

export const SegmentedButtonContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  width: 100%;

  height: 40px;
  margin-top: 4px;
  margin-bottom: 4px;

  button {
    text-align: center;
    padding-left: 12px;
    padding-right: 12px;

    font-weight: var(--md-sys-typescale-label-large-font-weight);
    font-size: var(--md-sys-typescale-label-large-font-size);

    background: none;
    border-style: solid;
    border-width: 1px;
    border-color: var(--md-sys-color-outline);
    color: var(--md-sys-color-on-surface);

    cursor: pointer;

    &:first-child {
      border-radius: 20px 0 0 20px;
    }

    &:last-child {
      border-radius: 0 20px 20px 0;
    }

    &:only-child {
      border-radius: 20px;
    }

    &:not(:first-child) {
      border-left-style: none;
    }

    &:hover {
      background-color: var(--color-on-surface-transp-08);
    }

    &:focus {
      background-color: var(--color-on-surface-transp-12);
    }

    &.selected {
      background-color: var(--md-sys-color-secondary-container);
      color: var(--md-sys-color-on-secondary-container);

      &:hover {
        background-color: var(--color-on-secondary-container-transp-08);
      }

      &:focus {
        background-color: var(--color-on-secondary-container-transp-12);
      }
    }

    &:disabled {
      border-color: var(--color-on-surface-transp-12);
      color: var(--color-on-surface-transp-38);
    }
  }
`;

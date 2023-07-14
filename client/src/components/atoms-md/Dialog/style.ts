import styled from 'styled-components';

// https://m3.material.io/components/dialogs/specs

export const StyledDialogContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: var(--md-sys-color-surface-container-high);

  .dialog-content {
    padding: 24px;

    color: var(--md-sys-color-on-surface);

    form {
      display: flex;
      flex-flow: row wrap;
      gap: 8px;

      & > * {
        flex-grow: 1;
        flex-basis: 34%;
      }

      .action-bar {
        flex-basis: 100%;
        display: flex;
        justify-content: flex-end;
        margin-top: 16px;
      }
    }

    @media screen and (min-width: 768px) {
      padding-top: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    position: initial;
    margin: 16px;
    width: fit-content;
    min-width: 280px;
    max-width: 560px;
    border-radius: 28px;
    box-shadow: 0 1px var(--shadow-blur-elevation-3) 0
      var(--color-shadow-transparent);

    padding-top: 24px;
  }
`;

export const StyledDialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  padding-left: 16px;
  padding-right: 16px;

  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;

    color: var(--md-sys-color-on-surface);
  }

  .close-icon {
    display: block;
    cursor: pointer;
    color: var(--md-sys-color-on-surface);
  }

  @media screen and (min-width: 768px) {
    min-height: fit-content;

    .close-icon {
      display: none;
    }
  }
`;

export const StyledDialogScrim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: var(--md-sys-color-scrim); */
  background-color: var(--color-shadow-transparent);

  display: flex;
  justify-content: center;
  align-items: center;
`;

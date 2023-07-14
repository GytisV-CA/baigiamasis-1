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
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 16px;

    form {
      display: flex;
      flex-flow: row wrap;
      gap: 8px;
    }
  }

  @media screen and (min-width: 768px) {
    position: initial;
    border-radius: 28px;
    box-shadow: 0 1px var(--shadow-blur-elevation-3) 0
      var(--color-shadow-transparent);
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
  }

  .close-icon {
    display: block;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
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

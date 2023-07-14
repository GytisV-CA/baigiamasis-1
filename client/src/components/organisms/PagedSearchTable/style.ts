import styled from 'styled-components';

export const StyledTopBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;

  & > * {
    &:first-child {
      flex-grow: 1;
      flex-shrink: 0;
      flex-basis: 89%;
    }
  }
`;

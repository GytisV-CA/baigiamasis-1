import styled from 'styled-components';

export const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;

  & > * {
    &:first-child {
      flex-grow: 1;
    }
  }
`;

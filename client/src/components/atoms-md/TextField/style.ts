import styled from 'styled-components';

export type StyledTextFieldVariants = 'filled' | 'outlined';

export const StyledTextField = styled.input<{
  $variant: StyledTextFieldVariants;
}>``;

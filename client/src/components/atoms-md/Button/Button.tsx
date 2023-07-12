import { ReactNode } from 'react';
import { StyledButton, StyledButtonVariants } from './style';

interface IButtonProps {
  children: ReactNode;
  variant: StyledButtonVariants;
  action?: () => void;
}

export function Button({ children, variant = 'filled', action }: IButtonProps) {
  return (
    <StyledButton $variant={variant} onClick={action}>
      {children}
    </StyledButton>
  );
}

export default Button;

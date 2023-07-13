import { ReactNode } from 'react';
import {
  StyledButton,
  StyledButtonVariants,
  StyledButtonElevated,
  StyledButtonFilled,
  StyledButtonTonal,
  StyledButtonOutlined,
  StyledButtonText,
} from './style';

interface IButtonProps {
  children: ReactNode;
  variant: StyledButtonVariants;
  action?: () => void;
}

export function Button({ children, variant = 'filled', action }: IButtonProps) {
  switch (variant) {
    case 'elevated':
      return (
        <StyledButtonElevated
          className='label-large'
          $variant={variant}
          onClick={action}
        >
          {children}
        </StyledButtonElevated>
      );
    case 'filled':
      return (
        <StyledButtonFilled
          className='label-large'
          $variant={variant}
          onClick={action}
        >
          {children}
        </StyledButtonFilled>
      );
    case 'tonal':
      return (
        <StyledButtonTonal
          className='label-large'
          $variant={variant}
          onClick={action}
        >
          {children}
        </StyledButtonTonal>
      );
    case 'outlined':
      return (
        <StyledButtonOutlined
          className='label-large'
          $variant={variant}
          onClick={action}
        >
          {children}
        </StyledButtonOutlined>
      );
    case 'text':
      return (
        <StyledButtonText
          className='label-large'
          $variant={variant}
          onClick={action}
        >
          {children}
        </StyledButtonText>
      );
    default:
      return (
        <StyledButton
          className='label-large'
          $variant={variant}
          onClick={action}
        >
          {children}
        </StyledButton>
      );
  }
}

export default Button;

import { ReactNode } from 'react';
import {
  StyledButton,
  StyledButtonVariants,
  StyledButtonElevated,
  StyledButtonFilled,
  StyledButtonTonal,
  StyledButtonOutlined,
  StyledButtonText,
  StyledButtonFAB,
} from './style';

interface IButtonProps {
  children?: ReactNode;
  variant: StyledButtonVariants;
  action?: () => void;
  type?: 'button' | 'submit' | 'reset';
  title?: string | undefined;
  icon?: string | undefined;
}

export function Button({
  children,
  variant = 'filled',
  action,
  type = 'button',
  title,
  icon,
}: IButtonProps) {
  const iconOnly: boolean = Boolean(icon) && !children;

  switch (variant) {
    case 'elevated':
      return (
        <StyledButtonElevated
          className='label-large'
          type={type}
          title={title}
          onClick={action}
          $iconOnly={iconOnly}
        >
          <span className='material-symbols-outlined'>{icon}</span>
          {children}
        </StyledButtonElevated>
      );
    case 'filled':
      return (
        <StyledButtonFilled
          className='label-large'
          type={type}
          title={title}
          onClick={action}
          $iconOnly={iconOnly}
        >
          <span className='material-symbols-outlined'>{icon}</span>
          {children}
        </StyledButtonFilled>
      );
    case 'tonal':
      return (
        <StyledButtonTonal
          className='label-large'
          type={type}
          title={title}
          onClick={action}
          $iconOnly={iconOnly}
        >
          <span className='material-symbols-outlined'>{icon}</span>
          {children}
        </StyledButtonTonal>
      );
    case 'outlined':
      return (
        <StyledButtonOutlined
          className='label-large'
          type={type}
          title={title}
          onClick={action}
          $iconOnly={iconOnly}
        >
          <span className='material-symbols-outlined'>{icon}</span>
          {children}
        </StyledButtonOutlined>
      );
    case 'text':
      return (
        <StyledButtonText
          className='label-large'
          type={type}
          title={title}
          onClick={action}
          $iconOnly={iconOnly}
        >
          <span className='material-symbols-outlined'>{icon}</span>
          {children}
        </StyledButtonText>
      );
    case 'fab':
      return (
        <StyledButtonFAB
          className='label-large'
          type={type}
          title={title}
          onClick={action}
          $iconOnly={iconOnly}
        >
          <span className='material-symbols-outlined'>{icon}</span>
          {children}
        </StyledButtonFAB>
      );
    default:
      return (
        <StyledButton
          className='label-large'
          $variant={variant}
          type={type}
          title={title}
          onClick={action}
          $iconOnly={iconOnly}
        >
          <span className='material-symbols-outlined'>{icon}</span>
          {children}
        </StyledButton>
      );
  }
}

export default Button;

import { StyledTextField, StyledTextFieldVariants } from './style';

interface ITextFieldProps {
  variant: StyledTextFieldVariants;
}

export default function TextField({ variant = 'filled' }: ITextFieldProps) {
  return <StyledTextField $variant={variant} />;
}

import React, { useRef } from 'react';
import {
  StyledInputContainer,
  StyledPlaceholder,
  StyledSupportingText,
  StyledTextFieldVariants,
  StyledInputOutlined,
  StyledInputFilled,
} from './style';

interface ITextFieldProps {
  variant: StyledTextFieldVariants;
  type?: 'text' | 'number' | 'email';
  size?: number;
  name?: string | undefined;
  labelText?: string;
  supportingText?: string;
  defaultValue?: string | number;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  containerBackgroundColor?: string;
}

export default function TextField({
  variant = 'filled',
  type = 'text',
  size,
  name,
  labelText = '',
  supportingText = '',
  defaultValue,
  value,
  onChange,
  containerBackgroundColor,
}: ITextFieldProps) {
  const inputElementRef = useRef<HTMLInputElement | null>(null);

  return (
    <StyledInputContainer $variant={variant}>
      {variant === 'outlined' ? (
        <>
          <StyledInputOutlined
            type={type}
            size={size}
            name={name}
            defaultValue={defaultValue}
            value={value}
            className='body-large'
            placeholder=' '
            onChange={onChange}
            ref={inputElementRef}
            $containerBackgroundColor={containerBackgroundColor}
          />
        </>
      ) : (
        <>
          <StyledInputFilled
            type={type}
            size={size}
            name={name}
            defaultValue={defaultValue}
            value={value}
            className='body-large'
            placeholder=' '
            onChange={onChange}
            ref={inputElementRef}
          />
        </>
      )}

      <StyledPlaceholder
        $variant={variant}
        onClick={() => inputElementRef.current?.focus()}
      >
        {labelText}
      </StyledPlaceholder>
      <StyledSupportingText $variant={variant} className='body-small'>
        {supportingText}
      </StyledSupportingText>
    </StyledInputContainer>
  );
}

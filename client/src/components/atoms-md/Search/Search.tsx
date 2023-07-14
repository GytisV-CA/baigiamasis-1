import React from 'react';
import { StyledSearchContainer, StyledInput, StyledIcon } from './style';

interface ISearchProps {
  supportingText?: string;
  defaultValue?: string | number;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Search({
  supportingText = '',
  defaultValue,
  value,
  onChange,
}: ISearchProps) {
  return (
    <StyledSearchContainer>
      <StyledIcon className='material-symbols-outlined'>search</StyledIcon>
      <StyledInput
        type='text'
        defaultValue={defaultValue}
        value={value}
        className='body-large'
        placeholder={supportingText}
        onChange={onChange}
      />
    </StyledSearchContainer>
  );
}

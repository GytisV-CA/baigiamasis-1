import { ReactNode } from 'react';
import { SegmentedButtonContainer } from './style';

export default function SegmentedButtons({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SegmentedButtonContainer className='label-large'>
      {children}
    </SegmentedButtonContainer>
  );
}

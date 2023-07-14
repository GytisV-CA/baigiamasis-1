import { ReactNode } from 'react';
import { StyledFooter } from './style';

export default function Footer({ children }: { children: ReactNode }) {
  return <StyledFooter>{children}</StyledFooter>;
}

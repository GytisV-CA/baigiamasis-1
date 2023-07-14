import { ReactNode } from 'react';
import {
  StyledDialogContainer,
  StyledDialogHeader,
  StyledDialogScrim,
} from './style';
import Button from '../Button';

interface IDialogProps {
  children: ReactNode;
  title?: string;
  onExit?: () => void;
  actions?: { buttonContent: ReactNode; action: () => void }[];
}

export default function Dialog({
  children,
  title,
  onExit,
  actions,
}: IDialogProps) {
  const clickHandler = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onExit) {
      onExit();
    }
  };

  return (
    <StyledDialogScrim onClick={clickHandler}>
      <StyledDialogContainer>
        <StyledDialogHeader>
          <div className='left'>
            {onExit && (
              <span
                className='close-icon material-symbols-outlined'
                onClick={onExit}
              >
                close
              </span>
            )}
            {title && <h1 className='title-large'>{title}</h1>}
          </div>
          <div className='right'>
            {actions &&
              actions.map((item, index) => (
                <Button
                  key={`action_${index}`}
                  variant='text'
                  action={item.action}
                >
                  {item.buttonContent}
                </Button>
              ))}
          </div>
        </StyledDialogHeader>
        <div className='dialog-content'>{children}</div>
      </StyledDialogContainer>
    </StyledDialogScrim>
  );
}

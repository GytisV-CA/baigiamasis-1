import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import Dialog from '../../atoms-md/Dialog';

interface IModalProps {
  children: ReactNode;
  title?: string;
  modalRoot: HTMLElement;
  onExit?: () => void;
  actions?: { buttonContent: ReactNode; action: () => void }[];
}

export default function Modal({
  children,
  title,
  modalRoot,
  onExit,
  actions,
}: IModalProps) {
  return ReactDOM.createPortal(
    <Dialog onExit={onExit} title={title} actions={actions}>
      {children}
    </Dialog>,
    modalRoot
  );
}

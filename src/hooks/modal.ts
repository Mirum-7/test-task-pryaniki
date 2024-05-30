import { useContext } from 'react';
import ModalContext from '../contexts/modal';
import { modalState } from '../types/modal';

type context = {
  state: modalState,
  open: ({ type, data }: Omit<modalState, 'opened'>) => void,
  close: () => void,
};

const useModal = () => useContext(ModalContext) as context;

export default useModal;

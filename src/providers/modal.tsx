import { ReactNode, useCallback, useMemo, useState } from 'react';
import ModalContext from '../contexts/modal';
import { modalState, modalType } from '../types/modal';

function ModalProvider ({ children }: { children: ReactNode }) {
  const [state, setState] = useState<modalState>({
    opened: false,
    type: modalType.none,
    data: null,
  });

  const open = useCallback(function({ type, data }: modalState) {
    // TODO: fix types
    // Не смог исправить ошибку:
    // Тип "modalType" не может быть назначен для типа "modalType.addRow | modalType.editRow".
    // Вроде как type = addRow | editRow, тк opened = true

    // поставил директиву ожидания ошибки, пака не найду как решить проблему
    setState({
      // @ts-ignore
      opened: true,
      // @ts-ignore
      type,
      // @ts-ignore
      data, 
    });
  }, []);

  const close = useCallback(() => {
    setState({
      opened: false,
      type: modalType.none,
      data:  null,
    });
  }, []);

  const values = useMemo(() => ({
    state,
    open,
    close,
  }), [state]);


  return (
    <ModalContext.Provider value={values}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider;

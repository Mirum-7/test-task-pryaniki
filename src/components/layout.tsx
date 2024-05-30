import { CssBaseline } from '@mui/material';
import type { ReactNode } from 'react';
import RenderModals from './modals/render';

function Layout ({ children }: { children: ReactNode }) {
  return (
    <>
      <CssBaseline/>
      {children}
      <RenderModals/>
    </>
  )
}

export default Layout;
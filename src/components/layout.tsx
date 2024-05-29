import { CssBaseline } from '@mui/material';
import type { ReactNode } from 'react';

function Layout ({ children }: { children: ReactNode }) {
  return (
    <>
      <CssBaseline/>
      {children}
    </>
  )
}

export default Layout;
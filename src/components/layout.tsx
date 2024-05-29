import { Container, CssBaseline } from '@mui/material';
import type { ReactNode } from 'react';

function Layout ({ children }: { children: ReactNode }) {
  return (
    <>
      <CssBaseline/>
      <Container
        maxWidth="lg"
        component="main"
      >
        {children}
      </Container>
    </>
  )
}

export default Layout;
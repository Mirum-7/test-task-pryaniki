import { AppBar, Button, Toolbar } from '@mui/material';
import useModal from '../hooks/modal';
import useAuth from '../hooks/auth';
import { modalType } from '../types/modal';

function NavBar () {
  const modal = useModal();
  const auth = useAuth();

  return (
    <AppBar position="static">
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Button variant="outlined" color="inherit" onClick={() => {
          modal.open({ type: modalType.addRow, data: null });
        }}>
          Добавить строку
        </Button>
        <Button variant="outlined" color="inherit" onClick={() => {
          auth.logout();
        }}>
          Выйти
        </Button>
      </Toolbar>
    </AppBar>
)
}

export default NavBar;

import { Box, Container } from '@mui/material';
import LoginForm from '../components/forms/login';

function LoginPage () {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <LoginForm/>
      </Box>
    </Container>
  )
}

export default LoginPage;

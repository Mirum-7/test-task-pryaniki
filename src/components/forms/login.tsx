import { LoadingButton } from '@mui/lab';
import { Box, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import useAuth from '../../hooks/auth';
import routes from '../../routes';
import { responseLoginType, statuses } from '../../types/response';

function LoginForm () {
  const auth = useAuth();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authFailed, setAuthFailed] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      setAuthFailed(false);
      setErrorMessage('');

      try {
        const { data: response } = await axios.post<responseLoginType>(routes.login, values);

        if (response.error_code === statuses.accessDeny) {
          setErrorMessage('Неверный логин или пароль');
          setAuthFailed(true);
          return;
        }
        
        auth.login(response.data.token);
        return;
      } catch {
        setErrorMessage('Ошибка сети');
      } finally {
        setIsLoading(false)
      }
    }
  });

 return (
  <Box
    component="form"
    noValidate
    onSubmit={formik.handleSubmit}
    onChange={formik.handleChange}
  >
    <Typography component="h1" variant="h5">
      Вход
    </Typography>
    <TextField
      margin="normal"
      required
      fullWidth
      autoFocus
      value={formik.values.username}
      error={authFailed}
      id="username"
      name="username"
      label="Логин"
    />
    <TextField
      margin="normal"
      required
      fullWidth
      value={formik.values.password}
      error={authFailed}
      id="password"
      name="password"
      label="Пароль"
      type="password"
    />
    <Typography
      variant='body1'
      color='red'
    >
      {errorMessage}
    </Typography>
    <LoadingButton
      loading={isLoading}
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Войти
    </LoadingButton>
  </Box>
 )
}

export default LoginForm;
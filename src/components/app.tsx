import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login';
import MainPage from '../pages/main';
import AuthProvider from '../providers/auth';
import StoreProvider from '../providers/store';
import urls from '../urls';
import Layout from './layout';
import PrivateRoute from './routes/private';
import PublicRoute from './routes/public';
import ModalProvider from '../providers/modal';

function App() {
  return (
    <AuthProvider>
      <StoreProvider>
        <ModalProvider>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path={urls.main} element={
                  <PrivateRoute>
                    <MainPage/>
                  </PrivateRoute>
                }/>
                <Route path={urls.login} element={
                  <PublicRoute>
                    <LoginPage/>
                  </PublicRoute>
                }/>
              </Routes>
            </Layout>
          </BrowserRouter>
        </ModalProvider>
      </StoreProvider>
    </AuthProvider>
  );
}

export default App;

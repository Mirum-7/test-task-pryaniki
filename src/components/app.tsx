import { BrowserRouter, Route, Routes } from 'react-router-dom';
import urls from '../urls';
import LoginPage from '../pages/login';
import MainPage from '../pages/main';
import Layout from './layout';
import AuthProvider from '../providers/auth';
import PrivateRoute from './routes/private';
import PublicRoute from './routes/public';
import StoreProvider from '../providers/store';

function App() {
  return (
    <AuthProvider>
      <StoreProvider>
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
      </StoreProvider>
    </AuthProvider>
  );
}

export default App;

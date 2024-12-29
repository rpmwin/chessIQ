import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { GameArchive } from './pages/GameArchive';
import { GameAnalysis } from './pages/GameAnalysis';
import { Profile } from './pages/Profile';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="archive"
            element={
              <PrivateRoute>
                <GameArchive />
              </PrivateRoute>
            }
          />
          <Route
            path="analysis/:gameId"
            element={
              <PrivateRoute>
                <GameAnalysis />
              </PrivateRoute>
            }
          />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SomePage from './components/SomePage';
import DetailPage from './components/DetailPage';
import ChildDetailPage from './components/ChildDetailPage';
import NotFoundPage from './components/NotFoundPage';
import RequiredAuth from './components/RequiredAuth';
import Login from './components/Login';
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/some" style={{ marginLeft: 10 }}>
          Some
        </Link>
      </nav>
      <hr />
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth redirectTo="/login">
              <HomePage />
            </RequiredAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="some" element={<SomePage />} />
        <Route path="/:id" element={<DetailPage />}>
          <Route path="info" element={<ChildDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

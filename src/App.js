import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Statistics from './pages/Statistics/Statistics';
import Header from './components/Header/Header';
import { Spinner } from './components/Spinner/Spinner';
import { useSelector } from 'react-redux';
function App() {
  const loading = useSelector((state) => state.app.isLoading);
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={loading ? <Spinner /> : <Home />} />
        <Route path="/statistics" element={<Statistics />} exact />
      </Routes>
    </div>
  );
}
export default App;

import { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Tours from './pages/Tours';
import About from './pages/About';
import TourDetails from './pages/TourDetails';
import AdminDashboard from './Admin/AdminDashboard';
import AgentDashboard from './Agent/AgentDashboard';
import SearchResultList from './pages/SearchResultList';
import UserDashboard from './User/UserDashboard';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import PrivateRoute from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search-results" element={<SearchResultList />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        {/* Protected routes */}
        <Route
          path="/admindashboard"
          element={
            <PrivateRoute role="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/agentdashboard"
          element={
            <PrivateRoute role="agent">
              <AgentDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/userdashboard"
          element={
            <PrivateRoute role="user">
              <UserDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </AuthProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing components
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

// Importing pages
import Home from './pages/home.jsx';
import Services from './pages/services.jsx';
import SchedulePickup from './pages/schedulepickup.jsx';
import Dashboard from './pages/dashboard.jsx';
import CommunityImpact from './pages/communityimpact.jsx';
import Volunteer from './pages/volunteer.jsx';

// Simple error boundary (optional but useful for debugging crashes)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Check your components.</h2>;
    }

    return this.props.children;
  }
}

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />

          <main style={{ flex: 1, padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/schedule-pickup" element={<SchedulePickup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/community-impact" element={<CommunityImpact />} />
              <Route path="/volunteer" element={<Volunteer />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;

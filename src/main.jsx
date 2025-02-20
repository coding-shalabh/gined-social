import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import store from './Redux/store';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <Router>
          <App /> {/* ✅ Now all routes and redirects are managed inside App.jsx */}
        </Router>
      </Provider>
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}

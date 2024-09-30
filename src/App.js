import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './screens/landingPage';
import EnteryPoint from './routes';
import PrivacyPloicy from './screens/privacyPolicy';
import TermsAndConditions from './screens/termsAndCondition';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<EnteryPoint />} >
      <Route path='' element={<LandingPage />} />
      <Route path='privacy-policy' element={<PrivacyPloicy />} />
      <Route path='terms-and-conditions' element={<TermsAndConditions />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

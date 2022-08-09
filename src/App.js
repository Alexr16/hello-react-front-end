import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greetings from './pages/Greetings';

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={(
          <>
            <Greetings />
          </>
)}
      />
    </Routes>
  </Router>
);

export default App;

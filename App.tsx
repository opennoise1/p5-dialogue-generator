import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Persona5 from './generators/P5/Persona5';
import Persona4 from './generators/P4/Persona4';

const App = () => {
  return (
    <>
      <HelmetProvider>
        <Routes >
          <Route path="/" element={<Persona5 />} />
          <Route path="/persona4" element={<Persona4 />} />
        </Routes>
      </HelmetProvider>
    </>
  )
}

export default App;
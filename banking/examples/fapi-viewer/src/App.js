import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DCR from './pages/DCR';
import PAR from './pages/PushAuthRequest';
import TokenRequest from './pages/TokenRequest';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <BrowserRouter>
        <Routes>
          <Route exact path="/dcr" element={<DCR />} ></Route>
          <Route exact path="/par" element={<PAR />}></Route>
          <Route path="*" element={<TokenRequest />}></Route>
          <Route exact path="/token" element={<TokenRequest />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

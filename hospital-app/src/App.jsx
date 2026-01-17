import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors";
import DoctorDetail from "../pages/DoctorDetail";
import About from '../pages/About';

const App = () => {
  return (
    <BrowserRouter>

      {/* HEADER */}
      <header>
        <h1>Hospital App</h1>
      </header>

      {/* NAV – HƏMİŞƏ GÖRÜNÜR */}
      <nav>
        <Link to="/">Ana səhifə</Link> |{" "}
        <Link to="/doctors">Həkimlər</Link>
      </nav>

      {/* MAIN – DƏYİŞƏN HİSSƏ */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Hospital</p>
      </footer>

    </BrowserRouter>
  );
};

export default App;
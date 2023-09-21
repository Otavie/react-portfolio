import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { AboutOtaviePage } from './pages/AboutOtaviePage';
import { ContactPage } from './pages/ContactPage';
import { NavbarComponent } from './components/NavbarComponent';
import { FooterComponent } from './components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function PageNotFound() {
  return (
    <div className="pb-5 not-found-project" style={{ marginTop: '90px', backgroundColor: 'rgb(0, 0, 0)' }}>
        <h1>Page Not Found!</h1>
    </div>
  )
}

function ProjectNotFound() {
  return (
    <div className="pb-5 not-found-project" style={{ marginTop: '90px', backgroundColor: 'rgb(0, 0, 0)' }}>
        <h1>Project Not Found!</h1>
    </div>
  )
}


function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
          <Route path="/about_otavie" element={<AboutOtaviePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project/*" element={<ProjectNotFound />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;

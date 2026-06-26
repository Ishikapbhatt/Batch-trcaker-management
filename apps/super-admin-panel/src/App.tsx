import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
          <Container>
            <Navbar.Brand href="/">TIMP Super Admin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Dashboard</Nav.Link>
                <Nav.Link href="/institutes">Institutes</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
                <Nav.Link href="/analytics">Analytics</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
          <Routes>
            <Route path="/" element={<div className="p-4">Dashboard - Coming Soon</div>} />
            <Route path="/institutes" element={<div className="p-4">Institutes - Coming Soon</div>} />
            <Route path="/users" element={<div className="p-4">Users - Coming Soon</div>} />
            <Route path="/analytics" element={<div className="p-4">Analytics - Coming Soon</div>} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;

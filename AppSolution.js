```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="email" element={<Email />} />
          <Route path="phone" element={<Phone />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function Contact() { 
  const location = useLocation();
  console.log(location);
  return <h1>Contact {location.pathname}</h1>; }
function Email() { return <h1>Email</h1>; }
function Phone() { return <h1>Phone</h1>; }

export default App; 
```
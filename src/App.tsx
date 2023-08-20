
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact/contact';
import Map from './pages/map/map';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';


function App() {
  const client=new QueryClient();
  return (
    <QueryClientProvider client={client}>

    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path="/" element={<Contact />} />
        <Route path="/map" element={<Map/>} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

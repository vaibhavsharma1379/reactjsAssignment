
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ShowList from './components/show-list';
import ShowSummary from './components/Show-details';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ShowList/>}/>
          <Route path="/show/:id" element={<ShowSummary/>} />
        </Routes>
      </Router>
    </div>
      
  );
}

export default App;

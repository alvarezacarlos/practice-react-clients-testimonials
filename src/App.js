import './App.css';

import ClientList from "./components/ClientList";

function App() {
  return (
    <div className="app">      
      <div className="main-container">
        <h2 className='title'>Here are our clients:</h2>
        <ClientList />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Layout from './components/layout';
import GlobalSpinnerContextProvider from './context/votersContext'

function App() {
  return (
    
    <GlobalSpinnerContextProvider>
      <Layout/>
    </GlobalSpinnerContextProvider>
  );
}

export default App;

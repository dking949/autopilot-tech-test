import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import AutoComplete from './components/AutoComplete';

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <QueryClientProvider client={queryClient}>
        <AutoComplete />
      </QueryClientProvider>
      </header>
    </div>
  );
}

export default App;

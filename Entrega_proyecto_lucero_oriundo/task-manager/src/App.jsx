import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TaskList />
      </main>
      <Footer />
    </div>
  );
}

export default App;

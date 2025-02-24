// frontend/src/App.js (Fixed console.log issue)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Checklist from './components/Checklist';
import Scenarios from './components/Scenarios';
import Documentation from './components/Documentation';
import Feedback from './components/Feedback';
import ChatGPTAssistant from './components/ChatGPTAssistant';
import ProgressTracking from './components/ProgressTracking';
import Quizzes from './components/Quizzes';
import Notifications from './components/Notifications';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/chat" element={<ChatGPTAssistant />} />
          <Route path="/progress" element={<ProgressTracking />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


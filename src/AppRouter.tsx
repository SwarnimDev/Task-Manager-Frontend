import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import DashBoard from './pages/DashBoard';
import Settings from './pages/Settings';
import Tasks from './pages/Tasks';
import Timeline from './pages/Timeline';

export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard/>} />
          <Route path="/tasks" element={<Tasks />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>;
}
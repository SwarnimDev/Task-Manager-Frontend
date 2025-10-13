import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>;
}
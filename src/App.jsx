import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./components/RequireAuth";
import SIgnupPage from "./pages/SIgnupPage";
import NotFound from "./pages/NotFound";
import Appointment from "./pages/Appointment";
import Doctors from "./pages/Doctors";
import History from "./pages/History";
import Hospitals from "./pages/Hospitals";
import Prescriptions from "./pages/Prescriptions";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/signup" element={<SIgnupPage />} />
            <Route path="*" element={<NotFound />} />
            <Route element={<RequireAuth />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/history" element={<History />} />
              <Route path="/hospitals" element={<Hospitals />} />
              <Route path="/prescriptions" element={<Prescriptions />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;

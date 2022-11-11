import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard/";
import Register from "./components/register";
import Error from "./components/error";
import Edit from "./components/dashboard/edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home title="Halaman Home" />} />
        <Route path="/dashboard" element={<Dashboard title="Halaman Dashboard" />} />
        <Route path="/edit" element={<Edit title="Edit Profile" />} />
        <Route
          path="/login"
          element={<Login title="Login Page" description="Mini Absensi App" />}
        />
        <Route
          path="/register"
          element={<Register title="Register Page" description="Mini Absensi App" />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

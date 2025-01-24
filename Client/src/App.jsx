import "./App.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  return (
    <>
      <Toaster />
      <ThemeContext>
        <AuthProvider>
          <TaskProvider>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </TaskProvider>
        </AuthProvider>
      </ThemeContext>
    </>
  );
}

export default App;

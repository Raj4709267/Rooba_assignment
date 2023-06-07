import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <Navbar />
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import "./container/pagas/pages.css";
import "./components/defaultLayout/defaultlayout.css";
import "react-toastify/dist/ReactToastify.css";
import Index from "./components/Index";
import './container/pagas/layout/layout.css'
function App() {
  return (
    <div className="App">
      <AllRoutes />
      <Index.ToastContainer />
    </div>
  );
}

export default App;

// src/App.jsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <>
      <div className="w-full">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;

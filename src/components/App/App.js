import './App.scss';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Calculator from "../Calculator/Calculator";

function App() {
  return (
    <div className="page">
      <Header/>
      <Routes>
        <Route path="/*" element={<Main />}></Route>
        <Route path="/calculator" element={<Calculator/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Compo/Header";
import Index from "./Pages/Index";
import Footer from "./Compo/Footer";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Men from "./Pages/Men";
import Sign_in from "./Pages/Sign_in";
import Sign_up from "./Pages/Sign_up";

//toastyfy nitification
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./Pages/Profile";
import Edit from "./Pages/Edit";
import Women from "./Pages/Women";
import Kid from "./Pages/Kid";



function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/" element={<> <Header/> <Index/> <Footer/> </>}></Route>
          <Route path="/About" element={<> <Header/> <About/> <Footer/> </>}></Route>
          <Route path="/Blog" element={<> <Header/> <Blog/> <Footer/> </>}></Route>
          <Route path="/Contact" element={<> <Header/> <Contact/> <Footer/> </>}></Route>
          <Route path="/Men" element={<> <Header/> <Men/> <Footer/> </>}></Route>
          <Route path="/Woman" element={<> <Header/> <Women/> <Footer/> </>}></Route>
          <Route path="/Kid" element={<> <Header/> <Kid/> <Footer/> </>}></Route>
          <Route path="/Sign_in" element={<> <Header/> <Sign_in/> <Footer/> </>}></Route>
          <Route path="/Sign_up" element={<> <Header/> <Sign_up/> <Footer/> </>}></Route>
          <Route path="/Profile" element={<> <Header/> <Profile/> <Footer/> </>}></Route>
          <Route path="/Edit/:id" element={<> <Header/> <Edit/> <Footer/> </>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

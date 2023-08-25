// import './App.css'
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AddAndEditUser from "./components/AddAndEditUser";
import ViewUser from "./components/ViewUser";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewuser" element={<ViewUser />} />
        <Route path="/adduser" element={<AddAndEditUser />} />
        <Route path="/deleteuser/:id" element={<ViewUser />} />
        <Route path="/edituser/:id" element={<AddAndEditUser />} />
        <Route path="/viewuser/:id" element={<UserDetails />} />
      </Routes>
    </>
  );

    //modal confirm &&&  pagination url


}

export default App;

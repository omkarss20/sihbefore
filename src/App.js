import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import StudyCard from "./pages/StudyMaterial/StudyCard";
import Navbar from "./components/Navbar/Navbar";
import CourseDetails from "./pages/StudyMaterial/CourseDetails";
import Login from "./pages/Login/Login";
import PostVideo from "./pages/StudyMaterial/PostVideo";
import ChatApp from "./pages/Chat/ChatApp";
import GovtCenter from "./pages/GovtCenter/GovtCenter";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studymaterial" element={<StudyCard />} />
        <Route path="/studymaterial/addvideo" element={<PostVideo />} />
        <Route path="/coursedetail/:id" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<ChatApp />} />
        <Route path="/government-center" element={<GovtCenter />} />
      </Routes>
    </>
  );
}

export default App;

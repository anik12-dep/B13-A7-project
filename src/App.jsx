import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Timeline from "../src/pages/timeline/Timeline";
import Stats from "../src/pages/stats/Stats";
import FriendDetails from "../src/pages/frienddetails/FriendDetails";
import NotFound from "../src/pages/notfound/NotFound";
import Navbar from "../src/components/navbar/Navbar";
import Footer from "../src/components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/friend/:id" element={<FriendDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

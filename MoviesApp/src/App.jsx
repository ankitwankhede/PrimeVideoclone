import { Route, Routes } from "react-router-dom";
import NavBar from "../component/NavBar";
import Home from "../component/Home";
import MediaDetail from "../component/MediaDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/media/:id" element={<MediaDetail />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SingleMovie from "./Components/SingleMoviepage/SingleMovie";
import Error from "./Components/Errorpage/Error";
import SignIn from "./Components/SignIN/SignIn";
import Shafiq from "./Components/Logo/Shafiq";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="/account" element={<SignIn />} />
        <Route path="/shafiq" element={<Shafiq />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

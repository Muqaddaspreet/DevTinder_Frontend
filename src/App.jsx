import Body from "./Body";
import { Routes, Route } from "react-router";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

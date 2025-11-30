import Body from "./Body";
import { Routes, Route } from "react-router";
import Login from "./Login";
import Profile from "./Profile";
import Feed from "./Feed";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/login" element={<Login />} />
          <Route index element={<Feed />} />{" "}
          {/*Making Feed as the default child route*/}
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

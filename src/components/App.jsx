import Body from "./Body";
import { Routes, Route } from "react-router";
import Login from "./Login";
import Profile from "./Profile";
import Feed from "./Feed";
import Connections from "./Connections";
import RequestsReceived from "./RequestsReceived";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/login" element={<Login />} />
          <Route index element={<Feed />} />{" "}
          {/*Making Feed as the default child route*/}
          <Route path="/profile" element={<Profile />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/requests" element={<RequestsReceived />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

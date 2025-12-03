import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user); // Accessing user data from redux store.

  const fetchUser = async () => {
    if (userData) return; // If user data is already present, no need to fetch again.
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        // Calling profile API
        withCredentials: true,
      });
      console.log(res.data.user);
      dispatch(addUser(res.data.user)); //Adding user to redux store
    } catch (error) {
      if (error.status === 401) navigate("/login"); // Navigating user to the login page in case of an error
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser(); // Fetch user data only if not already present in the store.
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content grows and pushes footer down */}
      <div className="grow">
        <Navbar />
        <Outlet />
        <h1 className="bg-red-500 text-white p-4">Hello World</h1>
      </div>
      {/* Footer always stays at bottom */}
      <Footer />
    </div>
  );
};

export default Body;

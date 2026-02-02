import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return; // If feed already exists in the store, do not fetch again
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addFeed(res.data.data)); // Dispatch the fetched feed data to the Redux store
    } catch (err) {
      console.log(err);
    }
  };

  // As soon as the page loads, we need t put the feed for the first time.
  useEffect(() => {
    getFeed();
  }, []);

  return (
    feed && (
      <div className="flex justify-center my-10">
        <UserCard user={feed[0]} /> {/* Render the first user from the feed*/}
      </div>
    )
  );
};

export default Feed;

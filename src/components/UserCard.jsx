import React from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = (user) => {
  const dispatch = useDispatch();
  const { firstName, lastName, about, photoUrl, age, gender } = user.user;

  const handleSendRequest = async (status) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + user.user._id,
        {},
        { withCredentials: true },
      );
      console.log("Send request to: ", firstName, lastName);
      console.log(res?.data?.data);

      // Remove the user from the feed after sending the request
      dispatch(removeUserFromFeed(user.user._id));
    } catch (err) {
      console.error("Error sending request:", err);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure className="mt-4">
        <img src={photoUrl} alt="Photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>
        {age && gender && (
          <p>
            {age}, {gender}
          </p>
        )}
        <p>{about}</p>
        <div className="card-actions justify-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("ignored")}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("interested")}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { BASE_URL } from "../utils/constants";

const RequestsReceived = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests); // Get requests from the Redux store

  const reviewRequest = async (status, requestId) => {
    try {
      // Implement review request functionality here (accept/reject)
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + requestId,
        {},
        {
          withCredentials: true,
        },
      );
      console.log(res?.data);
      // Update the Redux store based on the response if needed
      dispatch(removeRequest(requestId));
    } catch (err) {
      console.error("Error reviewing request:", err);
    }
  };

  const fetchRequestsReceived = async () => {
    try {
      // Implement fetch requests received functionality here
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      console.log(res?.data?.data);
      // Dispatch the fetched requests data to the Redux store if needed
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      console.error("Error fetching requests:", err);
    }
  };

  useEffect(() => {
    fetchRequestsReceived();
  }, []);

  // Render requests or a message if there are none
  if (!requests) return;

  // If there are no requests, show a message
  if (requests.length === 0) {
    return (
      <div className="flex justify-center my-10">
        <h1 className="text-2xl font-bold">No requests yet</h1>
      </div>
    );
  }

  return (
    <div className="justify-center my-10">
      <h1 className="text-3xl text-center font-bold">Requests</h1>
      <div className="flex flex-wrap mt-10 justify-center">
        {requests.map((request) => {
          const { firstName, lastName, about, photoUrl, age, gender } =
            request.senderId;
          return (
            <div
              key={request._id}
              className="md:flex items-center bg-base-200 my-2 sm:w-1/2 mx-2"
            >
              <div className="flex items-center px-5 pt-2 pb-3">
                <img
                  src={photoUrl}
                  className="w-30 h-30 rounded-full shadow-2xl"
                />
                <div className="w-70 pl-2">
                  <h1 className="text-xl font-bold">
                    {firstName} {lastName}
                  </h1>
                  {age && gender && (
                    <p className="text-sm pt-1">
                      {age}, {gender}
                    </p>
                  )}
                  <p className="pt-1">{about}</p>
                </div>
              </div>
              <div className="card-actions w-full justify-center md:justify-end mb-2 pr-5">
                <button
                  className="btn btn-primary w-20 md:w-14"
                  onClick={() => reviewRequest("rejected", request._id)}
                >
                  Reject
                </button>
                <button
                  className="btn btn-secondary w-20 md:w-14"
                  onClick={() => reviewRequest("accepted", request._id)}
                >
                  Accept
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RequestsReceived;

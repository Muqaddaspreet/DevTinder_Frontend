import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  // Get connections from the Redux store
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  // Get the connections of the logged in user
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res?.data?.data);

      dispatch(addConnections(res?.data?.data)); // Dispatch the fetched connections data to the Redux store
    } catch (err) {
      console.error("Error fetching connections:", err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  // Render connections or a message if there are none
  if (!connections) return;

  // If there are no connections, show a message
  if (connections.length === 0) {
    return (
      <div className="flex justify-center my-10">
        <h1 className="text-2xl font-bold">No connections yet</h1>
      </div>
    );
  }

  return (
    <div className="justify-center my-10">
      <h1 className="text-3xl text-center font-bold">Connections</h1>
      <div className="flex flex-wrap mt-10 justify-center">
        {connections.map((connection) => {
          const { firstName, lastName, about, photoUrl, age, gender } =
            connection;
          return (
            <div
              key={connection._id}
              className="bg-base-200 my-2 sm:w-3/5 lg:w-1/3 mx-2 w-full"
            >
              <div className="flex items-center p-5">
                <img
                  src={photoUrl}
                  className="w-30 h-30 rounded-full shadow-2xl"
                />
                <div className="w-3/5 pl-2">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;

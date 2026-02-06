import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = (user) => {
  console.log("Edit Profile User:", user.user);
  const [firstName, setFirstName] = useState(user.user.firstName || "");
  const [lastName, setLastName] = useState(user.user.lastName || "");
  const [photoUrl, setPhotoUrl] = useState(user.user.photoUrl || "");
  const [age, setAge] = useState(user.user.age || "");
  const [gender, setGender] = useState(user.user.gender || "");
  const [about, setAbout] = useState(user.user.about || "");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const saveProfile = async () => {
    setError(""); // Clearing error message before saving
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age: Number(age),
          gender,
          about,
        },
        { withCredentials: true },
      );
      console.log("Profile updated successfully", res.data);
      dispatch(addUser(res?.data?.data)); // Update user in Redux store
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
    } catch (err) {
      setError("Failed to save profile: " + err.message);
    }
  };

  return (
    <div className="my-10 flex justify-center">
      <div className=" mr-10 card bg-base-300 w-96 shadow-sm">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Edit Profile</h2>
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            className="input input-bordered w-full max-w-xs mb-2"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            className="input input-bordered w-full max-w-xs mb-2"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            value={photoUrl}
            placeholder="Photo URL"
            className="input input-bordered w-full max-w-xs mb-2"
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
          <input
            type="text"
            value={age}
            placeholder="Age"
            className="input input-bordered w-full max-w-xs mb-2"
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            value={gender}
            placeholder="Gender"
            className="input input-bordered w-full max-w-xs mb-2"
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            type="text"
            value={about}
            placeholder="About"
            className="input input-bordered w-full max-w-xs mb-4"
            onChange={(e) => setAbout(e.target.value)}
          />
          <div className="justify-center w-full">
            <p className="text-red-600">{error}</p>
            <button
              className="btn bg-red-500 w-full max-w-xs"
              onClick={saveProfile}
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, photoUrl, age, gender, about }} />
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile updated successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;

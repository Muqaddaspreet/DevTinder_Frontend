import React from "react";

const UserCard = (user) => {
  const { firstName, lastName, about, photoUrl, age, gender } = user.user;
  // console.log(user.user);
  // console.log(user.user.photoUrl);
  console.log(age);
  console.log(gender);

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
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

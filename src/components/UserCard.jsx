import React from "react";
import { Link } from 'react-router-dom'

const UserCard = () => {
  return (
    <div className="card-user">
      <div className="card-user__img">
        <img
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="User"
        />
      </div>
      <div className="card-user__content">
        <h2>John Doe</h2>
        <div className="flex items-center gap-5">
          <p className="card-user__text">
            <span className="card-user__text-misc">Repositories</span>
            <br />
            56
          </p>
          <p className="card-user__text">
            <span className="card-user__text-misc">Followers</span>
            <br />
            999.1k
          </p>
          <p className="card-user__text">
            <span className="card-user__text-misc">Following</span>
            <br />
            15
          </p>
        </div>
        <Link to={`/user-detail`} className="btn btn-default">
          View detail
        </Link>
      </div>
    </div>
  );
};

export default UserCard;

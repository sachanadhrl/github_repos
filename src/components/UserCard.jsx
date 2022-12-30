import { Link } from 'react-router-dom'

const UserCard = ({ user }) => {

  return (
    <div className="card-user">
      <div className="card-user__img">
        <img
          src={user.avatar_url}
          alt={user.login}
        />
      </div>
      <div className="card-user__content">
        <h2>{ user.login }</h2>
        <Link to={`/user-detail/${user.login}`} className="btn btn-default">
          View detail
        </Link>
      </div>
    </div>
  );
};

export default UserCard;

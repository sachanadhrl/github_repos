import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const UserCard = ({ user }) => {

  return (
    <motion.div
      initial={{ y:100, opacity:0 }}
      animate={{ y:0, opacity:1 }}
      transition={{ duration: 1, type: 'tween' }}
      className="card-user"
    >
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
    </motion.div>
  );
};

export default UserCard;

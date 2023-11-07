import css from './Friends.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  // console.log(friends);

  const Friend = ({ avatar, name, isOnline }) => {
    return (
      <li className={css.friends__item}>
        <span className={`${css.friends__status} ${isOnline ? css.online : css.offline}`}>
          {isOnline ? 'Online' : 'Offline'}
        </span>
        <img className={css.avatar} src={avatar} alt={name} />
        <p className={css.friends__name}>{name}</p>
      </li>
    );
  };
}

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

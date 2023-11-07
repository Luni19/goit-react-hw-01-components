import React from 'react';
import PropTypes from 'prop-types';
import css from './Friends.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
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

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

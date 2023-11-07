import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './Friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friends__list}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      ...FriendListItem.propTypes, // Include FriendListItem PropTypes
    })
  ).isRequired,
};

export default FriendList;

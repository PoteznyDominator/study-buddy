import React from 'react';
import PropTypes from 'prop-types';
import { users } from 'data/users';
import { UsersListItem } from 'components/UsersListItem/UsersListItem';

const name = () => (
  <div>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </div>
);

name.propTypes = {};

export default name;

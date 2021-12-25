import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UsersListItem.styles';
import { Button } from 'components/atoms/Button/Button';
import { Average } from 'components/atoms/average/average';
import { UserInfo } from 'components/atoms/UserInfo/UserInfo';

// eslint-disable-next-line prettier/prettier
export const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <Average averageValue={{ average }} />
    <UserInfo name={name} attendance={attendance} />
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

// export default UsersListItem;

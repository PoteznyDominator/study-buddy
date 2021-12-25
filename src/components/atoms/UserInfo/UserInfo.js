import React from 'react';
import { Wrapper, UserName, UserAttendance } from './UserInfo.styles';

export const UserInfo = (props) => (
  <Wrapper>
    <UserName>{props.name}</UserName>
    <UserAttendance>attendance: {props.attendance}</UserAttendance>
  </Wrapper>
);

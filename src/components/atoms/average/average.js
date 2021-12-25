import React from 'react';
import { StyledAverage } from './average.styles';

export const Average = ({ averageValue: { average } }) => (
  <StyledAverage backgroundColor={getBgColor({ average })}>
    {average}
  </StyledAverage>
);

let getBgColor = (average) => {
  if (average.average < 3) return '#CB8581';
  if (average.average < 4) return '#E1D888';
  return '#8FCB81';
};

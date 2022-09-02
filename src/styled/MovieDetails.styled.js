import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  font-weight: 600;
  font-size: 18px;
  padding: 8px;
  margin-bottom: 20px;
`;

export const Box = styled.div`
  display: flex;
`;

export const Poster = styled.img`
  margin-right: 30px;
`;
export const AdditIfoList = styled.li`
  margin-bottom: 10px;
  font-weight: 600;

  font-size: 18px;
`;

export const Link = styled(NavLink)`
  &.active {
    color: #2196f3;
  }
`;

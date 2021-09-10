import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission } from '../redux/reducers/MissionsReducer';

const Mission = ({ mission }) => {
  const {
    id, name, description, join,
  } = mission;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(joinMission(id));
  };

  const bgStyleMember = {
    backgroundColor: '#000',
    fontSize: '16px',
    color: 'red',
  };

  return (
    <tr key={id}>
      <th>{name}</th>
      <td className="description">{description}</td>
      <td>
        <p className="status-placeholder" style={join ? bgStyleMember : null}>
          {join ? 'Active Member' : 'NOT A MEMEBER'}
        </p>
      </td>
      <td>
        <button
          type="button"
          className={join ? 'leave-btn' : 'join-btn'}
          onClick={handleClick}
        >
          {join ? 'Leave mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    join: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Mission;

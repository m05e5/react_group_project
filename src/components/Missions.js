/* eslint-disable jsx-a11y/control-has-associated-label */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Mission from './Mission';
import './Missions.css';
import { setMissions } from '../redux/reducers/MissionsReducer';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  const loadMissions = async () => {
    const missions = await axios
      .get('https://api.spacexdata.com/v3/missions?limit=6')
      .then((res) => {
        const result = res.data.map((item) => ({
          name: item.mission_name,
          id: item.mission_id,
          description: item.description,
          join: false,
        }));
        return result;
      });
    dispatch(setMissions(missions));
  };

  useEffect(() => {
    if (missions.length === 0) {
      loadMissions();
    }
  }, []);
  return (
    <div className="missions-table">
      <table>
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th />
          </tr>
          {missions.map((mission) => (
            <Mission key={mission.id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;

import React from 'react';
import { useSelector } from 'react-redux';
import style from './rocket.module.css';

const MyProfile = () => {
  const state = useSelector((state) => state.rocketsReducer);

  return (
    <div className={style.MyProfile}>
      <div className={style.reservedMissions}>
        <h2>My Missions</h2>
      </div>
      <div className={style.reservedRockets}>
        <h2>My Rockets</h2>
        <div className="MyRockets">
          <ul>
            {state.map((rocket) => (
              <li key={rocket.rocket_id}>
                {rocket.reserved && <p className={style.Rocket_li}>{rocket.rocket_name}</p> }
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MyProfile = () => {
  const state = useSelector((state) => state.rocketsReducer);
  
  return (
  <div>
    <div className="MyRockets">
      <h2>My Rockets</h2>
      <div>
        <ul>
          {state.map((rocket) => (
            <li key={rocket.rocket_id} className={style.rocket}>
              <img src={rocket.flickr_images[0]} alt="rocket" className={style.rocketImg} />
              <div>
                <p className={style.rocketName}>{rocket.rocket_name}</p>
                <p className={style.rocketDesc}>
                  {rocket.reserved && <span className={style.reserved}>Reserved</span> }
                  {rocket.description}
                </p>
                {rocket.reserved
                  ? <button type="button" className={style.cancelReserve} onClick={() => cancelReserve(rocket.id)}>Cancel Reservation</button>
                  : <button type="button" className={style.reserve} onClick={() => reserve(rocket.id)}>Reserve Rocket</button>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  )
};

export default MyProfile;

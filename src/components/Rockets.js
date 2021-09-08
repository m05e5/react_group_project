import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rockets, reserveRockets, cancelReservation } from '../redux/rockets/rockets';
import style from './rocket.module.css';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const Rockets = () => {
  const state = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();

  const getRockets = () => {
    if (!state.length > 0) {
      fetch(baseUrl).then((data) => {
        data.json().then((dataJson) => dispatch(rockets(dataJson)));
      });
    }
  };
  const reserve = (id) => {
    dispatch(reserveRockets(id));
  };
  const cancelReserve = (id) => {
    dispatch(cancelReservation(id));
  };
  useEffect(() => {
    getRockets();
  }, []);
  return (
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
  );
};

export default Rockets;

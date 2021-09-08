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
          <li key={rocket.rocket_id}>
            <img src={rocket.flickr_images[0]} alt="rocket" />
            <div>
              <p>{rocket.rocket_name}</p>
                <p>
                  {rocket.reserved && <span className={style.reserved}>Reserved</span> }
                  {rocket.description}
                </p>
              </div>
              {rocket.reserved
                ? <button type="button" onClick={() => cancelReserve(rocket.id)}>Cancel Reservation</button>
                : <button type="button" onClick={() => reserve(rocket.id)}>Reserve Rocket</button>}
            </div>


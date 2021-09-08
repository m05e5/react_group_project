import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rockets, reserveRockets, cancelReservation } from '../redux/rockets/rockets';

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
            {rocket.reserved && <p id="reserved">yes yes yes yes yes yes yes</p> }
            <p>{rocket.rocket_id}</p>
            <p>{rocket.rocket_name}</p>
            <p>{rocket.rocket_type}</p>
            <p>{rocket.description}</p>
            {rocket.reserved
              ? <button type="button" onClick={() => cancelReserve(rocket.id)}>Cancel Reservation</button>
              : <button type="button" onClick={() => reserve(rocket.id)}>Reserve Rocket</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;

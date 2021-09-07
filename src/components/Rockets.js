import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rockets } from '../redux/rockets/rockets';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const Rockets = () => {
  const state = useSelector((state) => state.rocketsReducer.state);
  const dispatch = useDispatch();

  const getRockets = () => {
    fetch(baseUrl).then((data) => {
      data.json().then((dataJson) => dispatch(rockets(dataJson)));
    });
  };
  useEffect(() => {
    getRockets();
    console.log(state);
  }, []);
  return (
    <div>
      <ul>
        {state.map((rocket) => (
          <li key={rocket.rocket_id}>
            <img src={rocket.flickr_images[0]} alt="rocket" />
            <p>{rocket.rocket_id}</p>
            <p>{rocket.rocket_name}</p>
            <p>{rocket.rocket_type}</p>
            <p>{rocket.description}</p>
            <button type="button">Reserve Rocket</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;

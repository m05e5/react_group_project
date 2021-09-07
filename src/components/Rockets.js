/*eslint-disable*/
import React, {useEffect, componentDidMount} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rockets } from '../redux/rockets/rockets'
const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const Rockets = () => {
  const state = useSelector((state) => state.rocketsReducer.state);
  const dispatch = useDispatch();

  const getRockets = () => {
    fetch(baseUrl).then((data) => {
      data.json().then((dataJson) => 
      dispatch(rockets(dataJson)),
      
      ).then((data) => 
        console.log(data),
      ).then(console.log(state)); 
    });
  };

  useEffect(() => {
    getRockets(); 
    console.log(state);
  }, []);
//Umibe no etranger 
//The Anthem of heart 
//Tamako Love Story
//A whisker Away
  
  return (
    <div>
      <p> Rockets</p>
    </div>
  );
}

export default Rockets;

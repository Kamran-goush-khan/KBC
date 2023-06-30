import React, { useState } from 'react';
import restart from '../../assests/restart.jpg';
import classes from './Restart.module.css';
import { useDispatch } from 'react-redux';
import { authSliceAction } from '../../store/slice/authSlice';

export default function Restart() {
  const dispatch = useDispatch();
  const [over, setOver] = useState(false);

  const restartHandler = () => {
    dispatch(authSliceAction.restart());
  };

  if(!over) {
    setTimeout(() => {
        setOver(true);
    }, 3000);
  }
  return (
    <div>
      {!over && <h1 className={classes.h1}>You won</h1>}
     {over && <img
        onClick={restartHandler}
        className={classes.restart}
        src={restart}
        alt=""
      />}
    </div>
  );
}

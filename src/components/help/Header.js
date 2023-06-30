import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authSliceAction } from '../../store/slice/authSlice';

export default function Header() {
  const name = useSelector((state) => state.auth.name);
  const hint = useSelector((state) => state.auth.hint);
  const [saveHint , setSaveHint] = useState(false);
  const dispatch = useDispatch();

  const hintHandler = () => {
    setSaveHint(true);

    setTimeout(() => {
      setSaveHint(false);
    }, 1000);
    dispatch(authSliceAction.setHint());
  };

  const quitHandler = () => {
    dispatch(authSliceAction.restart());
  };

  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li>Player Name: {name}</li>
          {hint > 0 && !saveHint && (
            <li onClick={hintHandler} className={classes.hint}>
              {<i className="fa-sharp fa-solid fa-bolt"></i>}
              {` ${hint}`}
            </li>
          )}
          <li className={classes.quit} onClick={quitHandler}>
            QUIT
          </li>
        </ul>
      </nav>
    </>
  );
}

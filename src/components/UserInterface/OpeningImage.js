import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './OpeningImage.module.css';
import { useDispatch } from 'react-redux';
import { authSliceAction } from '../../store/slice/authSlice';

const OpeningImage = (props) => {
  const inputChangeRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(authSliceAction.setName(inputChangeRef.current.value));
    dispatch(authSliceAction.toggleLogin());
  };

  return (
    <div className={classes.logoImage}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          ref={inputChangeRef}
          placeholder="Enter Your Name"
          required="required"
        />
        <button type="submit" className="btn btn-primary">
          START
        </button>
      </form>
    </div>
  );
};

export default OpeningImage;

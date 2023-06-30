import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './prize.module.css';

const prize_array = [
  '5,000',
  '10,000',
  '20,000',
  '40,000',
  '80,000',
  '1,60,000',
  '3,20,000',
  '6,40,000',
  '12,50,000',
  '25,00,000',
  '50,00,000',
  '1,00,00,000',
  '3,00,00,000',
  '5,00,00,000',
  '7,00,00,000',
];

const Prize = (props) => {
  const index = useSelector((state) => state.auth.index);
  const [showList, setShowList] = useState(false);

  const prizeHandler = () => {
    setShowList(!showList);
  };

  return (
    <>
      {showList ? (
        <div className={classes['options-container']} onClick={prizeHandler}>
          <option
            className={index === 14 ? classes.highlight : ''}
            style={{ fontWeight: 'bolder' }}
            value="14"
          >
            7,00,00,000
          </option>
          <option className={index === 13 ? classes.highlight : ''} value="13">
            5,00,00,000
          </option>
          <option className={index === 12 ? classes.highlight : ''} value="12">
            3,00,00,000
          </option>
          <option className={index === 11 ? classes.highlight : ''} value="11">
            1,00,00,000
          </option>
          <option className={index === 10 ? classes.highlight : ''} value="10">
            50,00,000
          </option>
          <option className={index === 9 ? classes.highlight : ''} value="9">
            25,00,000
          </option>
          <option
            className={index === 8 ? classes.highlight : ''}
            style={{ fontWeight: 'bold' }}
            value="8"
          >
            12,50,000
          </option>
          <option className={index === 7 ? classes.highlight : ''} value="7">
            6,40,000
          </option>
          <option className={index === 6 ? classes.highlight : ''} value="6">
            3,20,000
          </option>
          <option
            className={index === 5 ? classes.highlight : ''}
            style={{ fontWeight: 'bold' }}
            value="5"
          >
            1,60,000
          </option>
          <option className={index === 4 ? classes.highlight : ''} value="4">
            80,000
          </option>
          <option className={index === 3 ? classes.highlight : ''} value="3">
            40,000
          </option>
          <option className={index === 2 ? classes.highlight : ''} value="2">
            20,000
          </option>
          <option className={index === 1 ? classes.highlight : ''} value="1">
            10,000
          </option>
          <option className={index === 0 ? classes.highlight : ''} value="0">
            5,000
          </option>
        </div>
      ) : (
        <big onClick={prizeHandler} className={classes.prize}>
          {prize_array[index]}
        </big>
      )}
    </>
  );
};

export default Prize;

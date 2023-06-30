import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './QuestionItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authSliceAction } from '../../store/slice/authSlice';

import crore from '../../assests/sound/crore.mp3';
import correct from '../../assests/sound/correct.mp3';
import wrongAudio from '../../assests/sound/wrong.mp3';
import playAudio from '../../assests/sound/play.mp3';

const QuestionItem = (props) => {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [takeHint, setTakeHint] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const hint = useSelector((state) => state.auth.hint);
  const dispatch = useDispatch();

  const right = new Audio(correct);
  const wrong = new Audio(wrongAudio);
  const cr = new Audio(crore);

  // Entry sound
  useEffect(() => {
    const play = new Audio(playAudio);
    play.play();
    setTimeout(() => play.pause(), 2250);

    dispatch(authSliceAction.setIndex(index));

    // Shuffle the options when the component mounts
    setShuffledOptions(
      shuffleOptions([
        ...props.quiz[index].incorrect_answers,
        props.quiz[index].correct_answer,
      ])
    );
  }, [index, props.quiz]);

  const answerHandler = (answer) => {
    const correctAnswer = props.quiz[index].correct_answer;
    const correct = correctAnswer === answer;

    setSelectedOption(answer);

    if (index === props.quiz.length - 1) {
      setTimeout(() => {
        if (correct) {
          cr.play();
        } else {
          wrong.play();
        }
      }, 500);

      setTimeout(() => {
        if (!correct) {
          wrong.pause();
          dispatch(authSliceAction.setIndex(index));
          dispatch(authSliceAction.winner());
          dispatch(authSliceAction.restart());
          setIndex(0);
        } else {
          cr.pause();
          dispatch(authSliceAction.setIndex(index));
          dispatch(authSliceAction.winner());
        }
        setSelectedOption(null);
      }, 4000);
      return;
    }

    if (correct) {
      setTimeout(() => {
        right.play();
      }, 500);

      setTimeout(() => {
        right.pause();
        setIndex((prevIndex) => prevIndex + 1);
        setSelectedOption(null);
      }, 3000);
    } else {
      setTimeout(() => {
        wrong.play();
      }, 500);

      setTimeout(() => {
        setIndex(0);
        dispatch(authSliceAction.restart());
        wrong.pause();
        setSelectedOption(null);
      }, 3000);
    }
  };

  const getOptionClassName = (option) => {
    if (selectedOption === option) {
      return props.quiz[index].correct_answer === option
        ? `${classes.option} ${classes.correct}`
        : `${classes.option} ${classes.incorrect}`;
    }
    return classes.option;
  };

  const shuffleOptions = (options) => {
    // Fisher-Yates Shuffle Algorithm
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  };

  //for hints
  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      return;
    }

    setTakeHint(true);

    setTimeout(() => {
      setTakeHint(false);
    }, 4000);
  }, [hint]);

  const hintAnswer = (
    <h1 style={{ fontSize: '2rem', color: 'yellow' }}>
      {props.quiz[index].correct_answer}
    </h1>
  );

  return (
    <div className={`container text-center ${classes.manage}`}>
      {takeHint && hintAnswer}
      <div className={classes.question}>{props.quiz[index].question}</div>
      <div className="row">
        <div
          onClick={() => answerHandler(shuffledOptions[0])}
          className={`col ${getOptionClassName(shuffledOptions[0])}`}
        >
          {shuffledOptions[0]}
        </div>
        <div
          onClick={() => answerHandler(shuffledOptions[1])}
          className={`col ${getOptionClassName(shuffledOptions[1])}`}
        >
          {shuffledOptions[1]}
        </div>
      </div>
      <div className="row">
        <div
          onClick={() => answerHandler(shuffledOptions[2])}
          className={`col ${getOptionClassName(shuffledOptions[2])}`}
        >
          {shuffledOptions[2]}
        </div>
        <div
          onClick={() => answerHandler(shuffledOptions[3])}
          className={`col ${getOptionClassName(shuffledOptions[3])}`}
        >
          {shuffledOptions[3]}
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;

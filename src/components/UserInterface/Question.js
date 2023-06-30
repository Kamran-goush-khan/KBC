import React, { useEffect, useState } from 'react';
import QuestionItem from './QuestionItem';

const question = [
  {
    question: 'Which planet is known as the Red Planet?',
    id: 1,
    a: 'Mars',
    b: 'Venus',
    c: 'Jupiter',
    d: 'Saturn',
    answer: 'a',
  },
  {
    question: 'Who is the author of the Harry Potter book series?',
    id: 2,
    a: 'J.R.R. Tolkien',
    b: 'J.K. Rowling',
    c: 'Dan Brown',
    d: 'George R.R. Martin',
    answer: 'b',
  },
  {
    question: 'Which country won the FIFA World Cup 2018?',
    id: 3,
    a: 'Brazil',
    b: 'Germany',
    c: 'France',
    d: 'Spain',
    answer: 'c',
  },
  {
    question: 'What is the capital of Australia?',
    id: 4,
    a: 'Sydney',
    b: 'Melbourne',
    c: 'Canberra',
    d: 'Perth',
    answer: 'c',
  },
  {
    question: 'Who is the CEO of Tesla Motors?',
    id: 5,
    a: 'Elon Musk',
    b: 'Jeff Bezos',
    c: 'Mark Zuckerberg',
    d: 'Tim Cook',
    answer: 'a',
  },
  {
    question: 'Which is the highest-grossing film of all time?',
    id: 6,
    a: 'Titanic',
    b: 'Avengers: Endgame',
    c: 'Avatar',
    d: 'Jurassic World',
    answer: 'b',
  },
  {
    question: "Which city is known as the 'Big Apple'?",
    id: 7,
    a: 'Los Angeles',
    b: 'New York City',
    c: 'Chicago',
    d: 'Miami',
    answer: 'b',
  },
  {
    question: 'What is the chemical symbol for gold?',
    id: 8,
    a: 'Go',
    b: 'Au',
    c: 'Ag',
    d: 'Ge',
    answer: 'b',
  },
  {
    question: 'Which country is home to the Eiffel Tower?',
    id: 9,
    a: 'Italy',
    b: 'Spain',
    c: 'Germany',
    d: 'France',
    answer: 'd',
  },
  {
    question: 'Who painted the Mona Lisa?',
    id: 10,
    a: 'Leonardo da Vinci',
    b: 'Pablo Picasso',
    c: 'Vincent van Gogh',
    d: 'Claude Monet',
    answer: 'a',
  },
  {
    question: 'Which is the largest ocean on Earth?',
    id: 11,
    a: 'Pacific Ocean',
    b: 'Atlantic Ocean',
    c: 'Indian Ocean',
    d: 'Arctic Ocean',
    answer: 'a',
  },
  {
    question: 'Which is the longest river in the world?',
    id: 12,
    a: 'Nile River',
    b: 'Amazon River',
    c: 'Yangtze River',
    d: 'Mississippi River',
    answer: 'a',
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    id: 13,
    a: 'China',
    b: 'India',
    c: 'Japan',
    d: 'South Korea',
    answer: 'c',
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    id: 14,
    a: 'William Shakespeare',
    b: 'Charles Dickens',
    c: 'Jane Austen',
    d: 'Emily Brontë',
    answer: 'a',
  },
  {
    question: 'What is the largest organ in the human body?',
    id: 15,
    a: 'Liver',
    b: 'Heart',
    c: 'Brain',
    d: 'Skin',
    answer: 'd',
  },
];

const Question = () => {
  const [loadedquestion, setLoadedQuestion] = useState([]);
  const [showQuestionItem, setShowQuestionItem] = useState(false);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setLoadedQuestion(data.results);
        setTimeout(() => {
          setShowQuestionItem(true);
        },);
      })
      .catch((error) => {
        console.log('Error fetching quiz data:', error);
      });
  }, []);

  

  return (
    <>
      {showQuestionItem ? (
        <QuestionItem quiz={loadedquestion} item={question} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Question;

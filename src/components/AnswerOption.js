import React from 'react';

const AnswerOption = props => {
  return (
    <div className="answerOption">
      <p>{props.answer}</p>
    </div>
  )
};

export default AnswerOption;
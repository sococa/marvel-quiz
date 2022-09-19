import React from 'react'
import { Fragment } from 'react'

const ProgressBar = ({idQuestion, maxQuestions}) => {

  const getWidth = (totalQuestions, questionId) => {
    return (100/totalQuestions) * questionId;
  }

  const actualQuestion = idQuestion +1
  const progressPercent = getWidth(maxQuestions, actualQuestion)

  return (
    <>
      <div className='percentage'>
        <div className='progressPercent'>{`Question: ${idQuestion +1}/10`}</div>
        <div className='progressPercent'>{`Progression: ${progressPercent}%`}</div>
      </div>
      <div className='progressBar'>
        <div className='progressBarChange' style={{width: `${progressPercent}%`}}></div>
      </div>
    </>
  )
}

export default React.memo(ProgressBar)
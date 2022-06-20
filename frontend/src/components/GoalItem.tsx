import React from 'react'
import Button from 'react-bootstrap/Button'
import {useDispatch} from 'react-redux'
import {deleteGoal} from '../features/goals/goalSlice'

// @ts-ignore
function GoalItem({ goal }) {

  const dispatch = useDispatch()

  return (
    <div>
      <div>
        {new Date(goal.createdAt).toLocaleString('en-US')}
      </div>
      <h2>{goal.text}</h2>
      <Button onClick={
        () => 
        // @ts-ignore
        dispatch(deleteGoal(goal._id))
        }>X</Button>
    </div>
  )
}

export default GoalItem
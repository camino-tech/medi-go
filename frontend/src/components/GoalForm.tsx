import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { createGoal } from '../features/goals/goalSlice'
import { useAppDispatch } from '../hooks/hooks'

function GoalForm() {

  const [text, setText] = useState('')

  const dispatch = useAppDispatch()

  const onSubmit = (e:any) => {
    e.preventDefault()
    // @ts-ignore
    dispatch(createGoal({text}))
    setText('')
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3' controlId='GoalFormGoal'>
          <Form.Label>Goal</Form.Label>
          <Form.Control type='text' placeholder='Please enter a goal' name ='goal' value={text} onChange={(e) => setText(e.target.value)} />
        </Form.Group>
        <Button type='submit' variant='primary'>Add Goal</Button>
      </Form>
    </>
  )
}

export default GoalForm
import React from 'react'
import {useState} from 'react'
const FormTodo = (props) => {

  const [description, setDescription] = useState('')

  const taskInput = e =>{
    setDescription(e.target.value)
  }

  const {handleAddItem} = props;
  const handleSubmit = e => {
    e.preventDefault()
    if(description.trim() !== ''){
      
      handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description
    });
    setDescription("")
    }
  };
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input className='form__input' type='text' value={description} onChange={taskInput}/>
        <button className='button pink'>Add</button>
      </form>
    </div>
  )
}

export default FormTodo
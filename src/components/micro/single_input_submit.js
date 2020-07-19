import React from 'react'


function singleInputSubmit(props) {

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  //   alert('winning')

  // }

  return (

    <form>
      <label>
      {props.inputName}
        <input 
          type="text" 
          onChange={props.handleNewTaskInputChange}
          id=""/>
      </label>
      <input 
        type="submit" 
        value={props.submitName} 
        onClick={(e) => props.handleAddNewTaskClick(e)} />
    </form>
  )  
}


export default singleInputSubmit;

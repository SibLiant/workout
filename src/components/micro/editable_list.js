import React from 'react'


function editableList(props) {

  const [taskList, setTaskList] = useState(['test1', 'test2', 'test3'])

  const listItems = i.map(function (element, index) {
    return (
      <li key={index}>
        <input 
            value={element}
            type="input"
            className="border border-gray-400 task-input" 
            arr-index={index}
            onChange={props.handleTaskListItemChange} />

        <button type="button">X</button>
      </li>
    )
  });

  return (
    <ul>
      {listItems}
    </ul>
  )
  
}

function handleEditableListInputChange(props, e) {
  console.log('--- editable list input change')
  const index = event.target.getAttribute('arr-index')
  const val = event.target.value
  const tasks = this.state.taskListElements
  tasks[index] = val
  this.setState({
    taskListElements: tasks
  });
   
}

export default editableList;

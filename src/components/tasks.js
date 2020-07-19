import React from 'react'
import SingleInputSubmit from './micro/single_input_submit'
import EditableList from './micro/editable_list'


class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskInput: ''
    }
  }

  handleNewTaskInputChange(event) {
    console.log('--- handle input change');
    console.log(event);
    this.setState({
      newTaskInput: event.target.value
    });
  } 

  handleAddNewTaskClick(e) {
    e.preventDefault();
    console.log(e);
    alert('winning')

  }

  render() {
    console.log('--rendering')
    return (
      <div > 
        <h1>hello tasks</h1>
        <SingleInputSubmit 
          inputName="Add Task:" 
          onChange={this.handleNewTaskInputChange}
          handleAddNewTaskClick={this.handleAddNewTaskClick} />

        <EditableList />
      </div>

    );
  }
}


export default Tasks;

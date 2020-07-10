import React from 'react'

class TaskListText extends React.Component {
  render() {
    return (
      <li key={this.props.listItemKey}>{this.props.listItemText}</li>
    );
  }
}

class TaskListTrash extends React.Component {
  render() {
    return (
      <li key={this.props.listItemKey}>{this.props.listItemText}</li>
    );
  }
}

class TaskListElements extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    console.log('-- render list');
    var e = this.props.taskListElements
    console.log(e);

    return (
      <div>
          <ul>
            {
              this.props.taskListElements.map((this.props.taskListElements) => 
                <TaskListText key={el}>test <TaskListTrash ></li>) 
            }
          </ul>
      </div>
    );
  }
}

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInputValue: '',
      value: '',
      parker: 'bad motherfucker',
      taskListElements: ['pushups', 'cardio', 'skull crushers'],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logValue = this.logValue.bind(this);

  }
  handleChange(event) {
    this.setState({taskInputValue: event.target.value});
    console.log(this.state.taskInputValue);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('--- handle submit');
    console.log(this.state);
    this.setState(state => {
      return {
        taskListElements: state.taskListElements.concat(state.taskInputValue),
        taskInputValue: '',
      };
    });

  }
  inputUpdated(e) {
    const { value } = e.target;
    this.setState({ taskInputValue: value });
    console.log(this.state);  
  }
  logValue(){
    console.log(this.state);
  }
  handleInputChange(event) {
    console.log('--- handle input change');
    console.log(event);
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {

    return (
      <div className="task-form">
        <form>

          <label htmlFor="Task">New Task</label>

          <input value={this.state.taskInputValue} onChange={this.handleChange}
            className="task-input"
            type="input"
            name="taskInput"/>

          <button type="submit" className='' onClick={this.handleSubmit}>Add</button>
          <button type="button" onClick={this.logValue}>Log value</button>

        </form>
        <TaskListElements taskListElements={this.state.taskListElements} />
      </div>
    );
  }
}

export default  Tasks;

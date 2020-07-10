import React from 'react'


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
    this.trashElement = this.trashElement.bind(this);
    this.handleListItemChange = this.handleListItemChange.bind(this);

  }
  handleChange(event) {
    console.log('-- handle change');
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
  handleListItemChange(event ){
    console.log('--- handle list item change')
    const index = event.target.getAttribute('arr-index')
    const val = event.target.value
    const tasks = this.state.taskListElements
    tasks[index] = val
    this.setState({
      taskListElements: tasks
    });

  }
  trashElement(index){
    console.log('-- trash element:' + index);
    this.setState({
      taskListElements: this.state.taskListElements.filter( (v,k) => k !== index )
    })
  }
  render() {

    return (
      <div className="task-form">
        <form>

          <label htmlFor="Task">New Task</label>

          <input value={this.state.taskInputValue} onChange={this.handleChange}
            type="input"
            name="taskInput"
            className="border border-gray-400 task-input"
          />

          <button 
            type="submit" 
            className='' 
            onClick={this.handleSubmit} 
            className="border border-red-700">
          Add
          </button>

          <button 
            type="button" 
            onClick={this.logValue} 
            className="border border-green-500">
            Log value
          </button>

        </form>

        <ul>
          {this.state.taskListElements.map((item, key) =>
            <li key={key}>
              <input arr-index={key}  defaultValue={item} onChange={this.handleListItemChange} className="border border-gray-400"/>
              <button type="button" onClick={() => this.trashElement(key)}  className="border border-red-200">X</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}


export default  Tasks;

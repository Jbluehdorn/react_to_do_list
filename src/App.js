import React from 'react';
import './App.sass';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({task: event.target.value});
  }

  handleSubmit(i) {
    this.addTask(this.state.task);

    i.preventDefault();
  }

  addTask(task) {
    const tasks = this.state.tasks.slice();

    tasks.push(task);

    this.setState({
      tasks: tasks,
      task: ''
    })
  }

  removeTask(task) {
    const tasks = this.state.tasks.slice();
    
    tasks.splice(tasks.indexOf(task), 1);

    this.setState({
      tasks: tasks
    });
  }

  render() {
    const tasks = this.state.tasks.map((task) => {
      return (
        <li className="list-group-item list-group-item-action" key={task}>
          {task}

          <span 
            className="pull-right clickable" 
            onClick={() => this.removeTask(task)}
          >
            <i className="fa fa-close"></i>
          </span>
        </li>
      );
    });

    return (
      <div className="app">
        <div className="container-fluid pt-2">
          <div className="row justify-content-sm-center">
            <div className="col-sm-6 col-med-4">
              <div className="card">
                <div className="card-header">
                  <h1 className="card-title mb-0">To Do List</h1>
                </div>
                <ul className="list-group list-group-flush">
                  {tasks}

                  <li className="list-group-item p-1">
                    <form onSubmit={this.handleSubmit}>
                      <div className="input-group">
                        <input 
                          type="text" 
                          name="task" 
                          className="form-control" 
                          onChange={this.handleChange}
                          value={this.state.task}
                        />
                        <div className="input-group-append">
                          <button className="btn btn-secondary" type="submit">
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

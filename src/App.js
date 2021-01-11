import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'


class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      value : ""
    }
  }
  Add_todo=()=>{
    this.state.todos.push(this.state.value)
    this.setState({
      todos : this.state.todos,
      value: ''
    })
  }
  Delete_todo=(index)=>{
   this.state.todos.splice(index,1);
   this.setState({
     todos: this.state.todos
   })
  }
  Edit_todo=(index)=>{
var updated_value = prompt("Enter updated value")
this.state.todos[index]= updated_value
this.setState({
  todos: this.state.todos
}) 
  }
  render() {
    let {todos,value} = this.state;
    return (
      <div>
        {/* <Header/> */}
        <input value={value} onChange={(e)=>this.setState({value: e.target.value})} type="text" placeholder="Enter Item" />
        <button onClick={this.Add_todo}>Add Item</button>
       
        <ul>{todos.map((v, i) => {
          return <li key={i}>{v}
            <button onClick={()=>this.Edit_todo(i)}>Edit Item</button>
           <button onClick={()=>this.Delete_todo(i)}>Delete Item</button>
          </li>
          
        })}</ul>
      </div>
    )
  }
}
export default App;

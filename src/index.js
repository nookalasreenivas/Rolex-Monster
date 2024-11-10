import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

/*const element=React.createElement('div', null, 
  React.createElement('h1', null,'asdfasdfas'),
  React.createElement('h1', null,'teeee')
)
class EmployeeDetails extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
  }
  render(){
    return(
      <div>
        <h1>Employee Detais</h1>
        <p><label>Employee ID:<b>{this.props.id}</b></label></p>
        <p><label>Employee Name:<b>{this.props.name}</b></label></p>
        <p><label>Employee Salary:<b>{this.props.salary}</b></label></p>
        <p><label>Employee Location:<b>{this.props.location}</b></label></p>
        <Deptarement deptname={this.props.departemtnname} depthead={this.props.departmenthead}></Deptarement>
      </div>
    )
  }
  
}
class Deptarement extends React.Component{
  render(){
    return(
      <div>
        <p><label>Department Name:<b>{this.props.deptname}</b></label></p>
        <p><label>Department Head:<b>{this.props.depthead}</b></label></p>
      </div>)
  }
}
 class Employee extends React.Component{
  constructor(prop){
    super(prop);
    this.state={
      updatesalary: null
    }
  }
  getUpdatesalary(salary){
    this.setState({
      updatesalary: salary
    })
  }
  render(){
    return(
      <div>
        <p>
          <label>Name: <b>{this.props.name}</b></label>
        </p>
        <p>
          <label>Location: <b>{this.props.location}</b></label>
        </p>
         <p>
          <label>Salary: <b>{this.props.totalsal}</b></label>
        </p>
        <p>
          <label>Salary: <b>{this.state.updatesalary}</b></label>
        </p>
        <Salary hra={this.props.hra} basic={this.props.basic} specialallowvence={this.props.special} onSalarychange={this.getUpdatesalary}></Salary>
      </div>
    )
  }
 }

 class Salary extends React.Component{
  constructor(props){
    super(props);
    
    this.state={
      basic: this.props.basic,
      hra:this.props.hra,
      special:this.props.specialallowvence,
    }
  }
  changeHandler(){
    let salary = parseInt(this.ref.hra.value)+parseInt(this.ref.basic.value)+parseInt(this.ref.special.value);
    this.props.onSalarychange(salary);
    console.log(salary);
  }
  render(){
    return(
      <div>
         <p>
          <label>Basic Salary: <input type='text' defaultValue={this.state.basic} ref="basic"></input></label>
        </p>
        <p>
          <label>hra: <input type='text' defaultValue={this.state.hra} ref="hra"></input></label>
        </p>
        <p>
          <label>special: <input type='text' defaultValue={this.state.special} ref="special"></input></label>
        </p>
        <p><button onClick={this.changeHandler}>Update salary</button></p>
      </div>
    )
  }
 }

const EmployeeContext = React.createContext({
    data:'',
    updateEmpid:()=>{}
});

class Employee extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:{
        Id:3756,
      },
      updateEmpid: this.getUpdateempid
      
    }
  }
  getUpdateempid=()=>{
    this.setState({data:{Id:56565}})
  }
  
  render(){
    return(
      <div>
        
        <p>
          <label>Employee id {this.state.data.Id} </label>
        </p>
        <EmployeeContext.Provider value={this.state}>
          <Salary/>
        </EmployeeContext.Provider>
      </div>
    )
  }
}
class Salary extends React.Component{
  static contextType=EmployeeContext;
  
  render(){

    return<div>
      <p>
        <label>{this.context.data.Id}</label>
      <button onClick={this.context.updateEmpid}>Change</button>
      </p>
      </div>
  }
}

const Emplistelement=(props)=>{
  return(
    <div style={{border:'1px solid red'}}>
       <p>
            Employee ID:<b>{props.list.Id}</b>
          </p>
          <p>
            Employee Name:<b>{props.list.Name}</b>
          </p>
          <p>
            Employee Location:<b>{props.list.Location}</b>
          </p>
          <p>
            Employee Salary:<b>{props.list.Salary}</b>
          </p>
    </div>
  )
}
const Employee=(props)=>{
  const emplist=props.employeelist;

  const emplistmap=emplist.map((emp)=>{
      return <Emplistelement key={emp.id} list={emp} />
  })
  return(
    <div>
      {emplistmap}
    </div>
  )
}

const employees = [

  {Id:101,Name:'Abhinav',Location:'Bangalore',Salary:12345},

  {Id:102,Name:'Abhishek',Location:'Chennai',Salary:23456},

  {Id:103,Name:'Ajay',Location:'Bangalore',Salary:34567}

];
const element= <Employee employeelist={employees}></Employee>

import { useEffect, useRef, useState } from "react";

 function Application() {
  const [count, setCount] = useState(0);
  // const [isActive,setIsActive] = useState(false)
  let timer;
  const handleStart = () => {
    setCount(count + 1);
    // setIsActive(true)
  };

  const handleStop = () => {
    clearTimeout(timer);
  };
  const handlereset = () => {
    setCount(0);
    clearTimeout(timer);l,
  };
  useEffect(() => {
    if (count) {
      timer = setTimeout(handleStart, 1500);
    }
  }, [count]);

  return (
    <div className="App">
      <h1>Let's start the counter</h1>
      <h3>{count}</h3>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handlereset}>reset</button>
    </div>
  );
}

class Componentdidmount extends React.Component{
  constructor(props){
    super();
    console.log(1);
    alert("constructor");
  }
  componentDidMount(){
    console.log(3);
    alert("componentdidmount");
  }
  componentDidCatch(){
    console.log(4);
    alert("componentdidmount");
  }
  onchange(){
    console.log(4);
    alert("onchangemethod");
  }
 render(){
  console.log(2);
  alert("render");
  return(
    <div>

    </div>
  )
 }
}
const App =<Componentdidmount></Componentdidmount>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  App
);*/
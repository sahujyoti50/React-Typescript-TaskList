import React from 'react';
import './App.css';
type person = {
  name: string,
  phoneNumber: number,
  address: string
}

const App:React.FC=()=> {

 const Person:person={
  name:"sid",
  phoneNumber:7896,
  address:"pune"
 }

 const Name:{firstName:string,lastName:string}[]=[{firstName:"jyoti",lastName:"sahu"}];
  return (
    <div className="App">
      <h3>React +typescript running</h3>
      <p>{Person.name} {Person.address} {Person.phoneNumber}</p>
      <p>{Name.map((name)=><p>{name.firstName} {name.lastName}</p>)}</p>
    </div>
  );
}

export default App;

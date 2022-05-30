import logo from './logo.svg';
import './App.css';
import React from 'react';
FullName.defaultProps = {FirstName : 'Name', LastName : 'LastName'};
MyGitHub.defaultProps = {Github : 'https://github.com'}

function App() {
  return (
    <div className="App">
      <FullName FirstName = 'Daniel' LastName = 'Mykytiuk'/>
      <PhoneNumber PhoneNumber = '+380970185531'/>
      <MailAdress MailAdress = 'dani4ku@gmail.com'/>
      <MyGitHub Github = 'https://github.com/DanielMikitiuk'/>
    </div>
  );
}

function MailAdress(props){
  return(
    <div>
      <h1>My Mail Adress</h1>
      <p>{props.MailAdress}</p>
    </div>
  )
}

function FullName(props) {
  let {FirstName:f, LastName:l}=props;
  return(
    <div>
      <h1>My Full Name</h1>
      <p>My name is <strong>{f} {l}</strong></p>
    </div>

  );
}

function MyGitHub(props){
  let {Github: gh} = props;
  return(
    <div>
      <h1>My Git Hub</h1>
      <a href={gh} target="_blank">link</a>
      
    </div>
  );
}

class PhoneNumber extends React.Component{
  render(){
    let {PhoneNumber: pn} = this.props;
    return(
      <div>
        <h1>Phone Number</h1>
        <p>My phone number is <strong>{pn}</strong></p>
      </div>
    );
  }
}
PhoneNumber.defaultProps = {PhoneNumber : '+380999999999'};



export default App;

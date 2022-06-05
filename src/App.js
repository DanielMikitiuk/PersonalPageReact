import './App.css';
import React from 'react';
FullName.defaultProps = {FirstName : 'Name', LastName : 'LastName'};
MyGitHub.defaultProps = {Github : 'https://github.com'}
function App() {
  return (
    <div className="App">
      <FullName FirstName = 'Daniel' LastName = 'Mykytiuk'/>
      <PhoneNumber PhoneNumber = '+3809701855**'/>
      <MailAdress MailAdress = 'dani4ku@gmail.com'/>
      <MyGitHub Github = 'https://github.com/DanielMikitiuk'/>
    </div>
  );
}

function MailAdress(props){
  const [mailAdress, setMailAdress] = React.useState(props.MailAdress);
  const hendlerMailChange = (event) => {
    setMailAdress(event.target.value);
  }
  
  const handleReset = (event) => {
    event.preventDefault();
    setMailAdress(props.MailAdress);
    
  }
  return(
    <div>
      <h1>My Mail Adress</h1>
      <form onReset={handleReset}>
        <input type="text" placeholder="mail" id="MailAdress" value={mailAdress} onChange={hendlerMailChange} required/>
        <input type="reset" placeholder="Reset"/>
      </form>
    </div>
  )
}

function FullName(props) {
  const [firstName, setFirstName] = React.useState(props.FirstName);
  const [lastName, setLastName] = React.useState(props.LastName);
  const hendlerFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }
  const hendlerLastNameChange = (event) => {
    setLastName(event.target.value);
  }
  const handleReset = (event) => {
    event.preventDefault();
    setFirstName(props.FirstName);
    setLastName(props.LastName);
  }
  return(
    <div>
      <h1>My Full Name</h1>
      <form onReset={handleReset}>
        <input type="text" placeholder="First Name" id="FirstName" value={firstName} onChange={hendlerFirstNameChange} required/>
        <input type="text" placeholder="Last Name" id="LastName" value={lastName} onChange={hendlerLastNameChange} required/>
        <input type="reset" placeholder="Reset"/>
      </form>
    </div>
  )
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

function PhoneNumber(props){
  const [phoneNumber, setPhoneNumber] = React.useState(props.PhoneNumber);
  const hendlerPhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  }
  const handleReset = (event) => {
    event.preventDefault();
    setPhoneNumber(props.PhoneNumber);
  }
  return(
    <div>
      <h1>My Phone Number</h1>
      <form onReset={handleReset}>
        <input type="text" placeholder="Phone Number" id="PhoneNumber" value={phoneNumber} onChange={hendlerPhoneChange} required/>
        <input type="reset" placeholder="Reset"/>
      </form>
    </div>
  )
}


PhoneNumber.defaultProps = {PhoneNumber : '+380999999999'};



export default App;

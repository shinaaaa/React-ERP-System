import React from 'react';
import Attendance from './Attendance';
import AttendanceResult from './AttendanceResult';
import axios from 'axios';

import './App.css';

class App extends React.Component {

  state = {
    isResult: false,
    title: 'hi'
  }

  getLoginResult = async () => {
    const {
      data: {
        title
      }
    } = await axios.get(
      "http://70.12.224.38:3000/index"
    );
    console.log("qweqweqweqwe : ",title);
    
    this.setState({ title });
  };
  componentDidMount() {
    //this.getLoginResult();
  }

  AttendanceResult = () => {
    this.setState({ isResult: true})
    this.getLoginResult();
  };

  render() {
    const { isResult, title } = this.state;
    return (
      <div className="App">
        <center>
          <h1>출근 관리 시스템</h1>
          {isResult ? <AttendanceResult /> : <Attendance />}
          <input name="Attendance_NFC" type="text" placeholder="NFC" />
          <button onClick={this.AttendanceResult}>Check</button>
          <p>{title}</p>
        </center>
      </div>
    );
  }
}

export default App;
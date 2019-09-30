import React from 'react';
import Attendance from './Attendance';
import AttendanceResult from './AttendanceResult';
import './App.css';

class App extends React.Component {

  state = {
    isResult: false
  }

  AttendanceResult = () => {
    this.setState({ isResult: true})
  };

  render() {
    const { isResult } = this.state;
    return (
      <div className="App">
        <center>
          <h1>출근 관리 시스템</h1>
          {isResult ? <AttendanceResult /> : <Attendance />}
          <input name="Attendance_NFC" type="text" placeholder="NFC" />
          <button onClick={this.AttendanceResult}>Check</button>
        </center>
      </div>
    );
  }
}

export default App;

import React from 'react';

function AttendanceResult()  {

    return (
      <div className="AttendanceResult">
        <p style={styles.p}>홍길동님 반갑습니다.</p>
      </div>
    );
}

const styles = {
  p : {
    fontSize: '30px'
  }
}

export default AttendanceResult;
